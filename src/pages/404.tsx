import Col from 'react-bootstrap/Col'
import { Layout } from '../components/Layout'
import React from 'react'
import { SEO } from '../components/SEO'
import { Sidebar } from '../components/sidebar/Sidebar'

const NotFoundPage = (): JSX.Element => (
  <Layout>
    <SEO title="404: Not found" />
    <Col md={8}>
      <h2 className="pb-4 mb-4 font-italic border-bottom">Ups, die Seite konnte nicht gefunden werden.</h2>
      <div className="mt-3 d-inline">
        <p>Es sieht danach aus, dass an dieser Stelle nichts gefunden wurde. Vielleicht hilft die Suchfunktion?</p>
      </div>
    </Col>
    <Sidebar />
  </Layout>
)

export default NotFoundPage
