import { FaSearch } from 'react-icons/fa'
import React from 'react'

export const SearchLink = () => {
  return (
    <div className="search-link mr-4">
      <a className="text-light ml-4" href={'/suche'}>
        <span title="Search">
          <FaSearch size={30} style={{ color: 'light' }} />
        </span>
      </a>
    </div>
  )
}
