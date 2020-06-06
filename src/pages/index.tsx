import 'bootstrap/dist/css/bootstrap.css'
import './index.scss'
import { Link, PageProps, graphql } from 'gatsby'
import { IData } from '../types'
import { Layout } from '../components/layout'
import React from 'react'
import { SEO } from '../components/seo'
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
      <div className="index-main">
        <div className="post-list-main">
          {posts.map(post => {
            const tags = post.node.frontmatter.tags
            return (
              <div key={post.node.id} className="container mt-5">
                <Link to={post.node.fields.slug} className="text-dark">
                  <h2>{post.node.frontmatter.title}</h2>
                </Link>
                <small className="d-block text-info">
                  <i>Erstellt am {post.node.frontmatter.date}</i> | Lesedauer: {post.node.timeToRead} Minute(n)
                </small>
                <p className="mt-3 d-inline">{post.node.excerpt}</p>
                <Link to={post.node.fields.slug} className="text-primary">
                  <small className="d-inline-block ml-3"> Vollständigen Post lesen</small>
                </Link>
                <div className="d-block">{getTechTags(data.site.siteMetadata.labels, tags)}</div>
              </div>
            )
          })}
          {hasNextPage && (
            <div className="mt-4 text-center">
              <Link to={nextPage} rel="next" style={{ textDecoration: 'none' }}>
                <span className="text-dark">N&auml;chste Seite →</span>
              </Link>
            </div>
          )}
        </div>

        <div className="sidebar px-2 py-2">
          <Sidebar />
        </div>
      </div>
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
