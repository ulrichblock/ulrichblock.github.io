import { Layout } from '../../components/layout'
import React from 'react'
import { SEO } from '../../components/seo'
import { Sidebar } from '../../components/sidebar/Sidebar'

const ConfigGenerator = () => (
  <Layout>
    <SEO title="Config Generator" />
    <div className="post-page-main">
      <div className="post-main">
        <h1>Config Generator</h1>
        <p>
          <i>Noch nicht nach Gatsby migriert.</i>
        </p>
      </div>

      <div className="sidebar px-2 py-2">
        <Sidebar />
      </div>
    </div>
  </Layout>
)

export default ConfigGenerator
