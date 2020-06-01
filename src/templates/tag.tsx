import 'bootstrap/dist/css/bootstrap.css'
import '../pages/index.scss'
import { Link, graphql } from 'gatsby'
import { ITag } from '../components/tags/TechTag'
import { Layout } from '../components/layout'
import React from 'react'
import { SEO } from '../components/seo'
import { Sidebar } from '../components/sidebar/Sidebar'
import { getTechTags } from '../components/tags/TechTags'

interface IEdge {
  node: {
    id: string
    excerpt: string
    fields: {
      slug: string
    }
    frontmatter: {
      date: string
      tags: string[]
      title: string
    }
    timeToRead: number
  }
}

interface IProps {
  pageContext: {
    tag: string
  }
  data: {
    allMarkdownRemark: {
      edges: IEdge[]
      totalCount: number
    }
    site: {
      siteMetadata: {
        labels: ITag[]
      }
    }
  }
}

const Tag = ({ pageContext, data }: IProps) => {
  const posts = data.allMarkdownRemark.edges
  const { tag } = pageContext
  const { totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${totalCount === 1 ? '' : 's'} tagged with "${tag}"`

  return (
    <Layout>
      <SEO title="Home" />
      <div className="index-main">
        <div className="post-list-main">
          <i>
            <h2 className="heading">{tagHeader}</h2>
          </i>
          {posts.map(post => {
            return (
              <div key={post.node.id} className="container mt-5">
                <Link to={post.node.fields.slug} className="text-dark">
                  <h2 className="heading">{post.node.frontmatter.title}</h2>
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
        </div>

        <div className="sidebar px-2 py-2">
          <Sidebar />
        </div>
      </div>
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
