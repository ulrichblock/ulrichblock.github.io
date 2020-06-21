import { Link, PageProps, graphql } from 'gatsby'
import Col from 'react-bootstrap/Col'
import { IData } from '../types'
import { Layout } from '../components/Layout'
import React from 'react'
import { SEO } from '../components/SEO'
import { Sidebar } from '../components/sidebar/Sidebar'
import { getTechTags } from '../components/tags/TechTags'

interface IPageContext {
  tag: string
}

type TagProps = PageProps<IData, IPageContext>

const Tag = ({ pageContext, data }: TagProps): JSX.Element => {
  const posts = data.allMarkdownRemark.edges
  const { tag } = pageContext
  const { totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${totalCount === 1 ? '' : 's'} tagged with "${tag}"`

  return (
    <Layout>
      <SEO title="Tech Tags" />
      <Col md={8}>
        <h2 className="mb-4 font-italic border-bottom">{tagHeader}</h2>

        {posts.map(post => {
          return (
            <div key={post.node.id} className="container mt-5">
              <Link to={post.node.fields.slug} className="text-dark">
                <h3>{post.node.frontmatter.title}</h3>
              </Link>
              <small className="d-block text-info">
                Erstellt am {post.node.frontmatter.date} | Lesedauer: {post.node.timeToRead} Minute(n)
              </small>
              <p className="mt-3 d-inline">{post.node.excerpt}</p>
              <Link to={post.node.fields.slug} className="text-primary">
                <small className="d-inline-block ml-3"> Vollständigen Post lesen</small>
              </Link>
              <div className="d-block">{getTechTags(data.site.siteMetadata.labels, post.node.frontmatter.tags)}</div>
            </div>
          )
        })}
      </Col>
      <Sidebar />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($tag: String) {
    site {
      siteMetadata {
        title
        author
        labels {
          tag
          tech
          name
          size
          color
          viewBox
        }
      }
    }
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] }, published: { eq: true } } }
    ) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 200)
          html
          id
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
            tags
          }
          fields {
            slug
          }
          timeToRead
        }
      }
    }
  }
`

export default Tag
