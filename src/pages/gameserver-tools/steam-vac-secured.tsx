import { Layout } from '../../components/layout'
import { Link } from 'gatsby'
import React from 'react'
import { SEO } from '../../components/seo'
import { Sidebar } from '../../components/sidebar/Sidebar'

const SteamVacSecured = () => (
  <Layout>
    <SEO title="Steam + VAC Secured?" />
    <div className="post-page-main">
      <div className="post-main">
        <h1>Steam + VAC Secured?</h1>
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

      <div className="sidebar px-2 py-2">
        <Sidebar />
      </div>
    </div>
  </Layout>
)

export default SteamVacSecured
