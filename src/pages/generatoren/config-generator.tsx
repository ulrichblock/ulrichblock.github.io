import { GenerateConfigs } from '../../components/generate-configs/GenerateConfigs'
import { Layout } from '../../components/layout'
import React from 'react'
import { SEO } from '../../components/seo'
import { Sidebar } from '../../components/sidebar/Sidebar'
import { configs } from '../../components/generate-configs/configs'

const ConfigGenerator = (): JSX.Element => (
  <Layout>
    <SEO title="Config Generator" />
    <div className="post-page-main">
      <div className="post-main">
        <h1>Config Generator</h1>
        <GenerateConfigs configs={configs} />
      </div>

      <div className="sidebar px-2 py-2">
        <Sidebar />
      </div>
    </div>
  </Layout>
)

export default ConfigGenerator
