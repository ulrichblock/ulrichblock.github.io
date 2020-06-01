import './blog-post.scss'
import { CustomShareBlock } from '../components/CustomShareBlock'
import { ITag } from '../components/tags/TechTag'
import { Layout } from '../components/layout'
import { PostHeader } from '../components/header/PostHeader'
import React from 'react'
import { SEO } from '../components/seo'
import { Sidebar } from '../components/sidebar/Sidebar'
import { getTechTags } from '../components/tags/TechTags'
import { graphql } from 'gatsby'

function techTopics(allTags: ITag[], tags: string[]): JSX.Element {
  if (!tags || tags.length === 0) {
    return <div />
  }

  return (
    <div className="d-block m-3">
      <h4 className="m-0">Tech Topic(s) des Artikels</h4>
      {getTechTags(allTags, tags, true)}
    </div>
  )
}

const BlogPost = props => {
  const post = props.data.markdownRemark
  const siteName = props.data.site.siteMetadata.title
  const siteUrl = props.data.site.siteMetadata.url
  const url = `${siteUrl}${props.pageContext.slug}`
  const tags = post.frontmatter.tags

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <div className="post-page-main">
        <div className="post-main">
          <div className="mt-3">
            <PostHeader date={post.frontmatter.date} timeToRead={post.timeToRead} title={post.frontmatter.title} />
            <div className="mt-3" dangerouslySetInnerHTML={{ __html: post.html }} />
            <CustomShareBlock title={post.frontmatter.title} siteName={siteName} url={url} />
            {techTopics(props.data.site.siteMetadata.labels, tags)}
          </div>
        </div>

        <div className="sidebar px-2 py-2">
          <Sidebar />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        url
        title
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
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        tags
        attachments
      }
      timeToRead
    }
  }
`

export default BlogPost
