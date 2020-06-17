import './bio.scss'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'

interface IProps {
  author?: string
  tagline: string
}

export const Bio = ({ tagline }: IProps): JSX.Element => {
  return (
    <StaticQuery
      query={graphql`
        query {
          file(relativePath: { eq: "profile-pic.jpg" }) {
            childImageSharp {
              fixed(width: 100, height: 100) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      `}
      render={data => (
        <div className="p-4 mb-1">
          <Img
            key="side-bar-profile-img"
            fixed={data.file.childImageSharp.fixed}
            style={{ maxWidth: '100px' }}
            className="sidebar-profile-img"
            alt=""
          />
          <p>
            <small className="text-muted">{tagline}</small>
          </p>
        </div>
      )}
    />
  )
}
