import { FaGithubSquare, FaLinkedin, FaSearch, FaTwitterSquare } from 'react-icons/fa'
import { IContacts } from '../../types'
import React from 'react'

interface IProps {
  contacts: IContacts
}

export const Icons = ({ contacts }: IProps): JSX.Element => {
  return (
    <div className="header-icons">
      <a
        className="text-primary ml-2"
        href={`https://www.linkedin.com/in/${contacts.linkedin}/`}
        target="_blank"
        rel="external noopener noreferrer"
      >
        <span title="Linked In">
          <FaLinkedin size={40} style={{ color: 'primary' }} />
        </span>
      </a>
      <a
        className="text-light ml-2"
        href={`https://github.com/${contacts.github}`}
        target="_blank"
        rel="external noopener noreferrer"
      >
        <span title="GitHub">
          <FaGithubSquare size={40} style={{ color: 'light' }} />
        </span>
      </a>
      <a
        className="text-info ml-2"
        href={`https://twitter.com/${contacts.twitter}`}
        target="_blank"
        rel="external noopener noreferrer"
      >
        <span title="Twitter">
          <FaTwitterSquare size={40} style={{ color: 'info' }} />
        </span>
      </a>
      <a className="text-light ml-2" href={'/suche'}>
        <span title="Search">
          <FaSearch size={30} style={{ color: 'light' }} />
        </span>
      </a>
    </div>
  )
}
