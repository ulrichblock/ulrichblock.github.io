import { IContacts } from '../../types'
import React from 'react'
import { SearchLink } from './SearchLink'
import { SocialLinks } from './SocialLinks'

interface IProps {
  contacts: IContacts
}

export const Right = ({ contacts }: IProps): JSX.Element => {
  return (
    <div className="head-right">
      <SocialLinks contacts={contacts} />
      <SearchLink />
    </div>
  )
}
