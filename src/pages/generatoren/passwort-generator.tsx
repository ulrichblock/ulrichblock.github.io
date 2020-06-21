import Col from 'react-bootstrap/Col'
import { GeneratePasswords } from '../../components/generators/passwords/GeneratePasswords'
import { Layout } from '../../components/Layout2'
import React from 'react'
import { SEO } from '../../components/SEO2'
import { Sidebar } from '../../components/sidebar/Sidebar'

const PasswortGenerator = (): JSX.Element => (
  <Layout>
    <SEO title="Passwort Generator" />
    <Col md={8}>
      <h2 className="mb-4 font-italic border-bottom">Passwort Generator</h2>
      <GeneratePasswords />
    </Col>
    <Sidebar />
  </Layout>
)

export default PasswortGenerator
