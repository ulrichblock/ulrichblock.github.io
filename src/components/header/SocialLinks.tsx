import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa'
import { IContacts } from '../../types'
import React from 'react'

interface IProps {
  contacts: IContacts
}

export const SocialLinks = ({ contacts }: IProps) => {
  return (
    <div className="social-links mr-4">
      <a
        className="text-primary ml-4"
        href={`https://www.linkedin.com/in/${contacts.linkedin}/`}
        target="_blank"
        rel="external noopener noreferrer"
      >
        <span title="Linked In">
          <FaLinkedin size={40} style={{ color: 'primary' }} />
        </span>
      </a>
      <a
        className="text-light ml-4"
        href={`https://github.com/${contacts.github}`}
        target="_blank"
        rel="external noopener noreferrer"
      >
        <span title="GitHub">
          <FaGithubSquare size={40} style={{ color: 'light' }} />
        </span>
      </a>
      <a
        className="text-info ml-4"
        href={`https://twitter.com/${contacts.twitter}`}
        target="_blank"
        rel="external noopener noreferrer"
      >
        <span title="Twitter">
          <FaTwitterSquare size={40} style={{ color: 'info' }} />
        </span>
      </a>
    </div>
  )
}
