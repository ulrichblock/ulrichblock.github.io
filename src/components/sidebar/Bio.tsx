import './sidebar.scss'
import React from 'react'
import profile from '../../images/profile-pic.jpg'

interface IProps {
  author?: string
  tagline: string
}

export const Bio = ({ tagline }: IProps) => {
  return (
    <div className="bio-main w-100">
      <img src={profile} style={{ maxWidth: '100px' }} className="profile-img" alt="" />
      <br />
      <small className="text-muted">{tagline}</small>
    </div>
  )
}
