import { Link, PageProps, graphql } from 'gatsby'
import Col from 'react-bootstrap/Col'
import { IData } from '../types'
import { Layout } from '../components/Layout2'
import { PostHeader } from '../components/header/PostHeader'
import React from 'react'
import { SEO } from '../components/SEO2'
import { Sidebar } from '../components/sidebar/Sidebar'
import { getTechTags } from '../components/tags/TechTags'

type IndexProps = PageProps<IData, unknown>

const IndexPage = ({ data }: IndexProps): JSX.Element => {
  const posts = data.allMarkdownRemark.edges
  const currentPage = 1
  const postsPerPage = 10 // see limit in graphql query below
  const nextPage = (currentPage + 1).toString()
  const hasNextPage = data.allMarkdownRemark.totalCount > postsPerPage

  return (
    <Layout>
      <SEO title="Home" />
      <Col md={8}>
        {posts.map(post => {
          const tags = post.node.frontmatter.tags

          return (
            <div key={post.node.id} className="blog-post">
              <PostHeader
                date={post.node.frontmatter.date}
                timeToRead={post.node.timeToRead}
                title={post.node.frontmatter.title}
                to={post.node.fields.slug}
              />
              <p className="mt-3 d-inline">
                {post.node.excerpt}&nbsp;
                <Link to={post.node.fields.slug}>Vollständigen Post lesen</Link>
              </p>
              <div>{getTechTags(data.site.siteMetadata.labels, tags)}</div>
            </div>
          )
        })}

        {hasNextPage && (
          <nav className="blog-pagination">
            <Link to={nextPage} rel="next" className="btn btn-outline-secondary" tabIndex={-1} aria-disabled={true}>
              N&auml;chste Seite →
            </Link>
          </nav>
        )}
      </Col>
      <Sidebar />
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
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
      limit: 10
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } }, fileAbsolutePath: { regex: "/^((?!/content/pages/).)*$/" } }
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

export default IndexPage
