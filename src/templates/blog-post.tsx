import { IData, ILabels } from '../types'
import { PageProps, graphql } from 'gatsby'
import Col from 'react-bootstrap/Col'
import { CustomShareBlock } from '../components/CustomShareBlock'
import { Layout } from '../components/Layout'
import { PostHeader } from '../components/header/PostHeader'
import React from 'react'
import { SEO } from '../components/SEO'
import { Sidebar } from '../components/sidebar/Sidebar'
import { getTechTags } from '../components/tags/TechTags'

function techTopics(allTags: ILabels[], tags?: string[]): JSX.Element {
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

interface IPageContext {
  slug: string
}

type PostListProps = PageProps<IData, IPageContext>

const BlogPost = (props: PostListProps): JSX.Element => {
  const post = props.data.markdownRemark
  const siteName = props.data.site.siteMetadata.title
  const siteUrl: string = props.data.site.siteMetadata.url
  const slug: string = props.pageContext.slug
  const url = `${siteUrl}${slug}`
  const tags = post.frontmatter.tags

  return (
    <Layout>
      <SEO title="Blog Beitragsliste" />
      <Col md={8}>
        <PostHeader
          className="border-bottom"
          date={post.frontmatter.date}
          timeToRead={post.timeToRead}
          title={post.frontmatter.title}
        />

        <div className="mt-3 d-inline" dangerouslySetInnerHTML={{ __html: post.html }} />

        <CustomShareBlock title={post.frontmatter.title} siteName={siteName} url={url} />
        {techTopics(props.data.site.siteMetadata.labels, tags)}
      </Col>
      <Sidebar />
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
