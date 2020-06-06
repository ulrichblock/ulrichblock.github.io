import './tags.scss'
import React, { CSSProperties } from 'react'
import { ILabels } from '../../types'
import { Link } from 'gatsby'

export const TechTag = ({ tag, tech, name, size, color, viewBox }: ILabels): JSX.Element => {
  const buttonStyle: CSSProperties = {}

  let svg

  if (name) {
    svg = (
      <div className="d-inline" style={{ color: color, fontSize: size }}>
        <svg
          role="img"
          viewBox={viewBox}
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          width={size}
          height={size}
          style={{ fill: `${color}` }}
        >
          <title>{tech}</title>
          <path d={name} />
        </svg>
      </div>
    )
  } else {
    buttonStyle.fontSize = size
  }

  return (
    <div className="d-inline-block p-1">
      <Link to={`/tags/${tag}/`}>
        <button className="tech-tag text-white" style={buttonStyle}>
          <p className="d-inline">{tech} </p>
          {svg}
        </button>
      </Link>
    </div>
  )
}
