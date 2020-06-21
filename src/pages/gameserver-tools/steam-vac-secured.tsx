import Col from 'react-bootstrap/Col'
import { Layout } from '../../components/Layout'
import { Link } from 'gatsby'
import React from 'react'
import { SEO } from '../../components/SEO'
import { Sidebar } from '../../components/sidebar/Sidebar'

const SteamVacSecured = (): JSX.Element => (
  <Layout>
    <SEO title="Steam + VAC Secured?" />
    <Col md={8}>
      <h2 className="mb-4 font-italic border-bottom">Steam + VAC Secured?</h2>
      <div className="mt-3 d-inline">
        <p>
          Dies ist eine Abfrage, die die Steam API benutzt. Das Grundprinzip kann man sich bei dem Blogpost
          <Link to="/ist-mein-server-steam-secured/">Ist mein Server Steam Secured?</Link> anschauen.
        </p>
        <p>Mittels der Abfrage kann man mehrere Dinge herausfinden.</p>
        <p>
          <ul>
            <li>Ist der Server bei Steam bekannt und gelistet?</li>
            <li>Ist der Server mit VAC gesichert?</li>
            <li>Wie viele Server sind Steam für diese IP bekannt, bzw. wie viele Server laufen auf diesem Host</li>
          </ul>
        </p>
        <p>
          Es ist möglich sowohl IPs, als auch einzelne Gameserver abzufragen. Man kann nur die IP des Servers ohne einen
          Port eingeben. In diesem Fall werden alle Server der IP gelistet, die den Steam Masterserver bekannt sind.
        </p>
      </div>
    </Col>
    <Sidebar />
  </Layout>
)

export default SteamVacSecured
