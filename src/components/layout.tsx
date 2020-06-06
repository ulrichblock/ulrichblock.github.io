/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import 'bootstrap/dist/css/bootstrap.css'
import './layout.scss'
import React, { ReactNode } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Header } from './header/header'

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
          <Header
            siteTitle={data.site.siteMetadata.title}
            author={data.site.siteMetadata.author}
            contacts={data.site.siteMetadata.contacts}
          />
          <div
            style={{
              margin: '0 auto',
              padding: '0px 1.0875rem 1.45rem',
              paddingTop: 0
            }}
          >
            <main className="p-4">{children}</main>
            <footer className="text-center">
              <hr />
              <p className="d-inline">
                © {new Date().getFullYear()}{' '}
                <a className="text-info" href="https://www.ulrich-block.de/">
                  Ulrich Block
                </a>
                .
              </p>
            </footer>
          </div>
        </>
      )}
    />
  )
}
