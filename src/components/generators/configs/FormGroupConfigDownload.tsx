import { IConfig, Inputs } from './config-abstract'
import { AbstractForm } from './AbstractForm'
import React from 'react'

export class FormGroupConfigDownload extends AbstractForm {
  private _downloadUrl: string | null = null

  render(): JSX.Element {
    return (
      <div className="form-row">
        <a id="download_link" download="ub.cfg" href="javascript:void(0)">
          <button type="button" className="btn btn-primary" onClick={this.onClick}>
            Erstellen
          </button>
        </a>
      </div>
    )
  }

  onClick = (): void => {
    const anchor = document.getElementById('download_link') as HTMLAnchorElement

    if (!anchor || !('href' in anchor)) {
      return
    }

    if (this._downloadUrl) {
      window.URL.revokeObjectURL(this._downloadUrl)
    }

    this._downloadUrl = window.URL.createObjectURL(new Blob([this._config()], { type: 'text/plain;charset=utf-8' }))

    anchor.setAttribute('href', this._downloadUrl)
  }

  private _config(): string {
    const selectedConfig = String(this._selectedValue('configSelect'))

    if (!selectedConfig || !this.props.configs || !this.props.configs[selectedConfig]) {
      return ''
    }

    return `//****************************************************************************\\\\
//*                                                                          *\\\\
//*                                                                          *\\\\
//* VERSION 2.0.0                                                            *\\\\
//* WWW.ULRICH-BlOCK.DE                                                      *\\\\${this._clientCfgComments(
      selectedConfig
    )}
//*                                                                          *\\\\
//****************************************************************************\\\\

${this._configGroups(selectedConfig)}
${this._hl2ServerCfgComments(selectedConfig)}
`
  }

  private _configGroups(selectedConfig: string): string {
    const groupedInputs: string[] = []

    for (const [group, inputs] of Object.entries(this._mergeDeep(selectedConfig))) {
      groupedInputs.push(`//****** ${group} ******//\n`)
      groupedInputs.push(this._configValues(inputs))
      groupedInputs.push('\n')
    }

    return groupedInputs.join('\n')
  }

  private _mergeDeep(selectedConfig: string): IConfig {
    const combinedConfig: IConfig = {}

    if (!this.props.configs) {
      return combinedConfig
    }

    const base = this.props.configs[`hl2base-${selectedConfig.replace(/^\w+-/, '')}`]

    for (const [group, inputs] of Object.entries(base)) {
      if (inputs.length) {
        combinedConfig[group] = inputs.concat([])
      }
    }

    const gameConfig: IConfig = this.props.configs[selectedConfig]

    for (const [group, inputs] of Object.entries(gameConfig)) {
      if (!inputs.length) {
        continue
      }

      if (combinedConfig[group]) {
        combinedConfig[group] = combinedConfig[group].concat(inputs)
      } else {
        combinedConfig[group] = inputs.concat([])
      }
    }

    return combinedConfig
  }

  private _configValues(inputs: Inputs[]): string {
    const inputValues: string[] = []

    for (const input of inputs) {
      const inputValue = 'values' in input ? this._selectedValue(input.name) : this._inputValue(input.name)

      if (inputValue !== undefined) {
        inputValues.push(`// ${input.description}`)
        inputValues.push(`${input.name} "${inputValue}"\n`)
      }
    }

    return inputValues.join('\n')
  }

  private _clientCfgComments(selectedConfig: string): string {
    if (!['css-client', 'dods-client', 'tf2-client'].includes(selectedConfig)) {
      return ''
    }

    return `
//*                                                                          *\\\\
//* Um die Config zu laden tragt Folgendes in die autoexec.cfg ein:          *\\\\
//* exec ub.cfg                                                              *\\\\
//*                                                                          *\\\\
//* Für besseres Treffen und Spielgefühl stellt noch                         *\\\\
//* folgende Startparameter ein:                                             *\\\\
//* -console -novid -noforcemspeed -noforcemaccel -noforcemparms -noaafonts  *\\\\
//* Rechtsklick in der Bibliothek auf Counter-Strike: Source                 *\\\\
//* Dort auf Eigenschaften -> Startoptionen -> copy und paste                *\\\\
//* Zusätzlich könnt ihr noch vorgeben, welche DirectX Version               *\\\\
//* genutzt werden soll, indem ihr -dxlevel XX hinzufügt                     *\\\\
//* Fuer XX: 80, 81, 90, 95, 100                                             *\\\\
//* In machen Fällen bringt ein niedriges dxlevel ein paar FPS               *\\\\`
  }

  private _hl2ServerCfgComments(selectedConfig: string): string {
    if (!['css-server', 'dods-server', 'tf2-server'].includes(selectedConfig)) {
      return ''
    }

    return `

// Die Versionsanzeige von Server Tools ist bei der Orangebox Engine und Linux fehlerhaft.
// Deswegen wird Metamod z.B. nicht bei HLSW angezeigt. Schreibt man jedoch die Versionsnummer in die server.cfg,
// wird es wieder angezeigt und man kann die Funktionen von Tools wie HLSW wieder nutzen.
// metamod_version "1.8.2"

// Die Versionsanzeige von Server Tools ist bei der Orangebox Engine und Linux fehlerhaft.
// Deswegen wird Sourcemod z.B. nicht bei HLSW angezeigt. Schreibt man jedoch die Versionsnummer in die server.cfg,
// wird es wieder angezeigt und man kann die Funktionen von Tools wie HLSW wieder nutzen.
// Sourcemod_version "1.3.3"

// Zwingt den Server im veralterten Protokoll mit den master Servern zu kommunizieren. Aktiviert man es werden in Tools wie HLSW
// wieder viele Daten angezeigt, die seitdem Orangebox Update nicht mehr angezeigt werden. Es ist unbekannt wie lange dieser Modus noch akzeptiert wird.
// Einige Admins haben schon berichtet, dass ihre Server bei Aktivierung nicht mehr in der Steam Serverliste zu finden waren.
sv_master_legacy_mode "0"

exec banned_user.cfg
`
  }
}
