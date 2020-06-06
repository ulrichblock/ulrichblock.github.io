import './header.scss'
import React from 'react'

interface IProps {
  date: string
  timeToRead: number
  title: string
}

export const PostHeader = ({ timeToRead, title, date }: IProps): JSX.Element => {
  return (
    <div className="post-header">
      <h1 className="mb-1">{title}</h1>
      <small>
        <i>Erstellt am </i> {date} | Lesedauer: {timeToRead} Minute(n)
      </small>
    </div>
  )
}
