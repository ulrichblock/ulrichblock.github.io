import { Link } from 'gatsby'
import React from 'react'

export const Left = (): JSX.Element => {
  return (
    <div className="head-left ml-4">
      <div className="head-links">
        <Link to="/" className="head-link">
          Home
        </Link>
        <Link to="/generatoren" className="head-link ml-3">
          Generatoren
        </Link>
        <Link to="/impressum" className="head-link ml-3">
          Impressum
        </Link>
        <Link to="/datenschutzerklaerung" className="head-link ml-3">
          Datenschutz
        </Link>
      </div>
    </div>
  )
}
