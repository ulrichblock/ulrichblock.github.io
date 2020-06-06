import './header.scss'
import { IContacts } from '../../types'
import { Left } from './Left'
import React from 'react'
import { Right } from './Right'

interface IProps {
  author?: string
  contacts: IContacts
  siteTitle?: string
}

export const Header = ({ contacts }: IProps): JSX.Element => {
  return (
    <header className="head-main p-1 px-5">
      <Left />
      <Right contacts={contacts} />
    </header>
  )
}
