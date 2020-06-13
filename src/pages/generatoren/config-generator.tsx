import { CLIENT_CSS } from './config-client-css'
import { CLIENT_DODS } from './config-client-dods'
import { CLIENT_HL2_BASE } from './config-client-hl2-base'
import { CLIENT_TF2 } from './config-client-tf2'
import { GenerateConfigs } from '../../components/generate-configs/GenerateConfigs'
import { IConfigs } from '../../components/generate-configs/config-abstract'
import { Layout } from '../../components/layout'
import React from 'react'
import { SEO } from '../../components/seo'
import { SERVER_CSS } from './config-server-css'
import { SERVER_DODS } from './config-server-dods'
import { SERVER_HL2_BASE } from './config-server-hl2-base'
import { SERVER_TF2 } from './config-server-tf2'
import { Sidebar } from '../../components/sidebar/Sidebar'

const configs: IConfigs = {
  'css-client': CLIENT_CSS,
  'css-server': SERVER_CSS,
  'dods-client': CLIENT_DODS,
  'dods-server': SERVER_DODS,
  'hl2base-client': CLIENT_HL2_BASE,
  'hl2base-server': SERVER_HL2_BASE,
  'tf2-client': CLIENT_TF2,
  'tf2-server': SERVER_TF2
}

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
