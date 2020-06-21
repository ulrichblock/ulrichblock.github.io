/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import './layout.scss'
import React, { ReactNode } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Footer } from './footer/Footer'
import { NavBar } from './header/NavBar'
import Row from 'react-bootstrap/Row'

interface IProps {
  children?: ReactNode
}

export const Layout = ({ children }: IProps): JSX.Element => {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
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
            }
          }
        }
      `}
      render={data => (
        <>
          <NavBar
            siteTitle={data.site.siteMetadata.title}
            author={data.site.siteMetadata.author}
            contacts={data.site.siteMetadata.contacts}
          />
          <main id="main" role="main" className="container ">
            <Row>{children}</Row>
          </main>
          <Footer />
        </>
      )}
    />
  )
}
