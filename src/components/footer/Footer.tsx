import React from 'react'

export const Footer = (): JSX.Element => {
  return (
    <footer className="footer mt-auto py-3">
      <div className="container">
        <span className="text-muted">
          © {new Date().getFullYear()}{' '}
          <a className="text-info" href="https://www.ulrich-block.de/">
            Ulrich Block
          </a>
          .
        </span>
      </div>
    </footer>
  )
}
