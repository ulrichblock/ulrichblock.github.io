import './sidebar.scss'
import { StaticQuery, graphql } from 'gatsby'
import { Bio } from './Bio'
import React from 'react'
import { RecentPosts } from './RecentPosts'
import { TechTags } from './TechTags'

export const Sidebar = () => {
  return (
    <StaticQuery
      query={graphql`
        query SiteBarQuery {
          site {
            siteMetadata {
              title
              tagline
              author
              contacts {
                linkedin
                github
                twitter
              }
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
          siteSearchIndex {
            index
          }
          allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { published: { eq: true } } }
          ) {
            edges {
              node {
                frontmatter {
                  title
                  tags
                }
                fields {
                  slug
                }
              }
            }
          }
        }
      `}
      render={data => (
        <>
          <div className="sidebar-main border-left">
            <Bio author={data.site.siteMetadata.author} tagline={data.site.siteMetadata.tagline} />
            <div className="tech-tags mt-3">
              <RecentPosts posts={data.allMarkdownRemark.edges} />
              <TechTags labels={data.site.siteMetadata.labels} posts={data.allMarkdownRemark.edges} />
            </div>
          </div>
        </>
      )}
    />
  )
}
