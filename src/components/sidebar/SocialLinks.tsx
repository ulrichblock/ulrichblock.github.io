import './sidebar.scss'
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa'
import { IContacts } from '../../types'
import React from 'react'

interface IProps {
  contacts: IContacts
}

export const SocialLinks = ({ contacts }: IProps) => {
  return (
    <div className="side-social-links float-left mt-3 mb-3">
      <a
        className="text-secondary p-2"
        href={`https://www.linkedin.com/in/${contacts.linkedin}/`}
        target="_blank"
        rel="external noopener noreferrer"
      >
        <span title="Linked In">
          <FaLinkedin size={26} style={{ color: 'secondary' }} />
        </span>
      </a>
      <a
        className="text-secondary p-2"
        href={`https://github.com/${contacts.github}`}
        target="_blank"
        rel="external noopener noreferrer"
      >
        <span title="GitHub">
          <FaGithubSquare size={26} style={{ color: 'secondary' }} />
        </span>
      </a>
      <a
        className="text-secondary p-2"
        href={`https://twitter.com/${contacts.twitter}`}
        target="_blank"
        rel="external noopener noreferrer"
      >
        <span title="Twitter">
          <FaTwitterSquare size={26} style={{ color: 'secondary' }} />
        </span>
      </a>
    </div>
  )
}
