/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { StaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import { ISiteMetadata } from '../types'
import React from 'react'
import profile from '../images/profile-pic.jpg'

interface IMeta {
  name: string
  content: string
}

interface IProps {
  title: string
  lang?: string
  meta?: IMeta[]
  description?: string
}

interface IData {
  site: {
    siteMetadata: ISiteMetadata
  }
}

export const SEO = ({ description, lang, meta = [], title }: IProps): JSX.Element => {
  return (
    <StaticQuery
      query={graphql`
        query SeoQuery {
          site {
            siteMetadata {
              title
              description
              author
              contacts {
                twitter
              }
            }
          }
        }
      `}
      render={(data: IData) => (
        <>
          <Helmet
            htmlAttributes={{
              lang
            }}
            title={title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            meta={[
              {
                content: 'strict-origin-when-cross-origin',
                'http-equiv': 'Referrer-Policy'
              },
              {
                content: description ?? data.site.siteMetadata.description,
                name: 'description'
              },
              {
                content: title,
                property: 'og:title'
              },
              {
                content: description ?? data.site.siteMetadata.description,
                property: 'og:description'
              },
              {
                content: 'website',
                property: 'og:type'
              },
              {
                content: profile,
                property: 'og:image'
              },
              {
                content: 'summary',
                name: 'twitter:card'
              },
              {
                content: `@${data.site.siteMetadata.contacts.twitter}`,
                name: 'twitter:creator'
              },
              {
                content: `@${data.site.siteMetadata.contacts.twitter}`,
                name: 'twitter:site'
              },
              {
                content: title,
                name: 'twitter:title'
              },
              {
                content: description ?? data.site.siteMetadata.description,
                name: 'twitter:description'
              },
              {
                content: profile,
                property: 'twitter:image'
              },
              {
                content: 'index, follow',
                name: 'robots'
              },
              {
                content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
                name: 'googlebot'
              },
              {
                content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
                name: 'bingbot'
              }
            ].concat(meta)}
            defer={false}
          />
        </>
      )}
    />
  )
}
