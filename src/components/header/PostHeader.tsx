import './post-header.scss'
import { Link } from 'gatsby'
import React from 'react'

interface IProps {
  className?: string
  date: string
  timeToRead: number
  title: string
  to?: string
}

export const PostHeader = ({ className = '', date, timeToRead, title, to }: IProps): JSX.Element => {
  return (
    <div className={className}>
      {to && (
        <h3 className="blog-post-title">
          <Link to={to}>{title}</Link>
        </h3>
      )}
      {!to && <h2 className="blog-post-title">{title}</h2>}
      <p className="blog-post-meta">
        Erstellt am {date} | Lesedauer: {timeToRead} Minute(n)
      </p>
    </div>
  )
}
