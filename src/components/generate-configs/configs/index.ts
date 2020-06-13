import { CLIENT_CSS } from './config-client-css'
import { CLIENT_DODS } from './config-client-dods'
import { CLIENT_HL2_BASE } from './config-client-hl2-base'
import { CLIENT_TF2 } from './config-client-tf2'
import { IConfigs } from '../config-abstract'
import { SERVER_CSS } from './config-server-css'
import { SERVER_DODS } from './config-server-dods'
import { SERVER_HL2_BASE } from './config-server-hl2-base'
import { SERVER_TF2 } from './config-server-tf2'

export const configs: IConfigs = {
  'css-client': CLIENT_CSS,
  'css-server': SERVER_CSS,
  'dods-client': CLIENT_DODS,
  'dods-server': SERVER_DODS,
  'hl2base-client': CLIENT_HL2_BASE,
  'hl2base-server': SERVER_HL2_BASE,
  'tf2-client': CLIENT_TF2,
  'tf2-server': SERVER_TF2
}
