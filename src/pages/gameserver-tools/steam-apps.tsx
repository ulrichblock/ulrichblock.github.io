import Col from 'react-bootstrap/Col'
import { Layout } from '../../components/Layout'
import React from 'react'
import { SEO } from '../../components/SEO'
import { Sidebar } from '../../components/sidebar/Sidebar'

const SteamApps = (): JSX.Element => (
  <Layout>
    <SEO title="Steam Apps" />
    <Col md={8}>
      <h2 className="mb-4 font-italic border-bottom">Steam Apps</h2>
      <div className="mt-3 d-inline">
        <p>
          <i>Noch nicht nach Gatsby migriert.</i>
        </p>
      </div>
    </Col>
    <Sidebar />
  </Layout>
)

export default SteamApps
