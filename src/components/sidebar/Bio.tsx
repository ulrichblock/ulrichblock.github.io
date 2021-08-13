import './bio.scss'
import { StaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
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
              gatsbyImageData(layout: FIXED)
            }
          }
        }
      `}
      render={data => (
        <div className="p-4 mb-1">
          <GatsbyImage
            key="side-bar-profile-img"
            image={data.file.childImageSharp.gatsbyImageData}
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
