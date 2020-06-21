import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa'
import { IContacts } from '../../types'
import React from 'react'

interface IProps {
  contacts: IContacts
}

export const SocialLinks = ({ contacts }: IProps): JSX.Element => {
  return (
    <div className="p-4">
      <h4 className="font-italic">Anderswo</h4>
      <ol className="list-unstyled">
        <li>
          <span title="GitHub">
            <FaGithubSquare size={26} style={{ color: 'secondary' }} />
          </span>
          &nbsp;
          <a
            className="text-secondary"
            href={`https://github.com/${contacts.github}`}
            target="_blank"
            rel="external noopener noreferrer"
          >
            GitHub
          </a>
        </li>
        <li>
          <span title="Twitter">
            <FaTwitterSquare size={26} style={{ color: 'secondary' }} />
          </span>
          &nbsp;
          <a
            className="text-secondary"
            href={`https://twitter.com/${contacts.twitter}`}
            target="_blank"
            rel="external noopener noreferrer"
          >
            Twitter
          </a>
        </li>
        <li>
          <span title="LinkedIn">
            <FaLinkedin size={26} style={{ color: 'secondary' }} />
          </span>
          &nbsp;
          <a
            className="text-secondary"
            href={`https://www.linkedin.com/in/${contacts.linkedin}/`}
            target="_blank"
            rel="external noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
      </ol>
    </div>
  )
}
