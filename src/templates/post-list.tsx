import 'bootstrap/dist/css/bootstrap.css'
import '../pages/index.scss'
import { Link, graphql } from 'gatsby'
import { Layout } from '../components/layout'
import React from 'react'
import { SEO } from '../components/seo'
import { Sidebar } from '../components/sidebar/Sidebar'
import { getTechTags } from '../components/tags/TechTags'

const PostList = props => {
  const posts = props.data.allMarkdownRemark.edges
  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? '/' : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()

  // TODO: keywords
  return (
    <Layout>
      <SEO title="Home" keywords={['gatsby', 'javascript', 'react', 'web development', 'blog', 'graphql']} />
      <div className="index-main">
        <div className="post-list-main">
          {posts.map(post => {
            const tags = post.node.frontmatter.tags
            return (
              <div key={post.node.id} className="container mt-5">
                <Link to={post.node.fields.slug} className="text-dark">
                  <h2 className="title">{post.node.frontmatter.title}</h2>
                </Link>
                <small className="d-block text-info">
                  <i>Erstellt am {post.node.frontmatter.date}</i> | Lesedauer: {post.node.timeToRead} Minute(n)
                </small>
                <p className="mt-3 d-inline">{post.node.excerpt}</p>
                <Link to={post.node.fields.slug} className="text-primary">
                  <small className="d-inline-block ml-3"> Vollständigen Post lesen</small>
                </Link>
                <div className="d-block">{getTechTags(props.data.site.siteMetadata.labels, tags)}</div>
              </div>
            )
          })}
          <div className="text-center mt-4">
            {!isFirst && (
              <Link to={prevPage} rel="prev" style={{ textDecoration: 'none' }}>
                <span className="text-dark">← Vorherige Seite</span>
              </Link>
            )}
            {!isLast && (
              <Link to={nextPage} rel="next" style={{ textDecoration: 'none' }}>
                <span className="text-dark ml-5">N&auml;chste Seite →</span>
              </Link>
            )}
          </div>
        </div>

        <div className="sidebar px-2 py-2">
          <Sidebar />
        </div>
      </div>
    </Layout>
  )
}

export const listQuery = graphql`
  query PaginateQuery($skip: Int!, $limit: Int!) {
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
      limit: $limit
      skip: $skip
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

export default PostList
