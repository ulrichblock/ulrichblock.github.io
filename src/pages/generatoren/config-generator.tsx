import { GenerateConfigs } from '../../components/generate-configs/GenerateConfigs'
import { Layout } from '../../components/layout'
import { Link } from 'gatsby'
import React from 'react'
import { SEO } from '../../components/seo'
import { Sidebar } from '../../components/sidebar/Sidebar'

const ConfigGenerator = (): JSX.Element => (
  <Layout>
    <SEO title="Config Generator" />
    <div className="post-page-main">
      <div className="post-main">
        <h1>Config Generator</h1>
        <p id="client">
          Die Voreinstellungen sind f&uuml;r maximale FPS ausgelegt. Die fertige Datei downloaden und in der
          autoexec.cfg Folgendes eintragen: <pre>exec ub.cfg</pre>
          Alternativ kannst du auch diese <Link to="./autoexec.cfg">autoexec.cfg</Link> downloaden.
        </p>
        <GenerateConfigs />
      </div>

      <div className="sidebar px-2 py-2">
        <Sidebar />
      </div>
    </div>
  </Layout>
)

export default ConfigGenerator
