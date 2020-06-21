import './nav-bar.scss'
import Container from 'react-bootstrap/Container'
import { IContacts } from '../../types'
import { Icons } from './Icons'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Navbar from 'react-bootstrap/Navbar'
import React from 'react'

interface IProps {
  author?: string
  contacts: IContacts
  siteTitle?: string
}

export const NavBar = ({ contacts }: IProps): JSX.Element => {
  return (
    <Navbar bg="custom-dark" variant="dark" sticky="top" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Generatoren" id="basic-nav-dropdown">
              <NavDropdown.Item href="/generatoren/passwort-generator/">Passwort</NavDropdown.Item>
              <NavDropdown.Item href="/generatoren/config-generator/">Config</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/impressum">Impressum</Nav.Link>
            <Nav.Link href="/datenschutzerklaerung">Datenschutz</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Icons contacts={contacts} />
      </Container>
    </Navbar>
  )
}
