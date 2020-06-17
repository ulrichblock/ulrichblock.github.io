import Col from 'react-bootstrap/Col'
import { GenerateConfigs } from '../../components/generators/configs/GenerateConfigs'
import { Layout } from '../../components/Layout'
import React from 'react'
import { SEO } from '../../components/SEO'
import { Sidebar } from '../../components/sidebar/Sidebar'
import { configs } from '../../components/generators/configs/config-variables'

const ConfigGenerator = (): JSX.Element => (
  <Layout>
    <SEO title="Config Generator" />
    <Col md={8}>
      <h2 className="pb-4 mb-4 font-italic border-bottom">Config Generator</h2>
      <GenerateConfigs configs={configs} />
    </Col>
    <Sidebar />
  </Layout>
)

export default ConfigGenerator
