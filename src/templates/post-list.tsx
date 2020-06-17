import { Link, PageProps, graphql } from 'gatsby'
import Col from 'react-bootstrap/Col'
import { IData } from '../types'
import { Layout } from '../components/Layout'
import { PostHeader } from '../components/header/PostHeader'
import React from 'react'
import { SEO } from '../components/SEO'
import { Sidebar } from '../components/sidebar/Sidebar'
import { getTechTags } from '../components/tags/TechTags'

interface IPageContext {
  currentPage: number
  numPages: number
}

type PostListProps = PageProps<IData, IPageContext>

const PostList = (props: PostListProps): JSX.Element => {
  const posts = props.data.allMarkdownRemark.edges
  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? '/' : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()

  return (
    <Layout>
      <SEO title="Blog Beitragsliste" />
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
              <div>{getTechTags(props.data.site.siteMetadata.labels, tags)}</div>
            </div>
          )
        })}

        <nav className="blog-pagination">
          {!isFirst && (
            <Link to={prevPage} rel="next" className="btn btn-outline-secondary" tabIndex={-1} aria-disabled={true}>
              ← Vorherige Seite
            </Link>
          )}
          {!isLast && (
            <Link to={nextPage} rel="next" className="btn btn-outline-secondary" tabIndex={-1} aria-disabled={true}>
              N&auml;chste Seite →
            </Link>
          )}
        </nav>
      </Col>
      <Sidebar />
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
