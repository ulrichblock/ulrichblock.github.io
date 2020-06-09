import { IConfig, IInputNumber, IInputString, ISelectNumber, ISelectString, Inputs, Options } from './config-types'
import { CLIENT_CSS } from './config-client-css'
import { CLIENT_DODS } from './config-client-dods'
import { CLIENT_HL2_BASE } from './config-client-hl2-base'
import { CLIENT_TF2 } from './config-client-tf2'
import { Link } from 'gatsby'
import React from 'react'

const configs = {
  'css-client': CLIENT_CSS,
  'dods-client': CLIENT_DODS,
  'hl2base-client': CLIENT_HL2_BASE,
  'tf2-client': CLIENT_TF2
}

interface IInputs {
  [key: string]: JSX.Element
}

interface IInputGroups {
  [key: string]: {
    header: string[]
    inputs: IInputs
  }
}

export class GenerateConfigs extends React.Component {
  private _downloadUrl: string | null = null
  private _groups: IInputGroups = {}

  public render(): JSX.Element {
    return (
      <form>
        {this._configSelector()}
        {this._configTexts()}
        {this._formElements()}
        {this._download()}
      </form>
    )
  }

  private _configSelector(): JSX.Element {
    const options = [
      { key: 'css-client', value: 'Counter-Strike: Source Client' },
      { key: 'dods-client', value: 'Day of Defeat: Source Client' },
      { key: 'tf2-client', value: 'Team Fortress 2 Client' }
    ]

    return (
      <div className="form-group">
        <label htmlFor="configSelect" className="col-form-label col-form-label-sm">
          Art der Config
        </label>
        <select
          className="form-control form-control-sm"
          id="configSelect"
          aria-describedby={'configSelectHelp'}
          defaultValue="css-client"
          onChange={this.onConfigSelected}
        >
          {this._options(options)}
        </select>
        {this._helpText('configSelectHelp', 'Spiel und Typ der zu erstellenden Config Datei.')}
      </div>
    )
  }

  private _configTexts(): JSX.Element[] {
    const texts: JSX.Element[] = []
    texts.push(
      <div id="hl2baseClientText" className={'toggle-config game-hl2base type-client'}>
        Die Voreinstellungen sind f&uuml;r maximale FPS ausgelegt. Die fertige Datei downloaden und in der autoexec.cfg
        Folgendes eintragen: <b>exec ub.cfg</b>
        Alternativ kannst du auch diese <Link to="./autoexec.cfg">autoexec.cfg</Link> downloaden.
      </div>
    )

    return texts
  }

  onConfigSelected = (): undefined => {
    const [game, type] = String(this._selectedValue('configSelect')).split('-')
    const elements = document.getElementsByClassName('toggle-config')

    for (let i = 0; i < elements.length; i++) {
      if (elements[i].constructor.name === 'HTMLDivElement') {
        const { style } = elements[i] as HTMLDivElement
        style.display =
          (elements[i].classList.contains(`game-${game}`) || elements[i].classList.contains('game-hl2base')) &&
          elements[i].classList.contains(`type-${type}`)
            ? 'block'
            : 'none'
      }
    }

    return
  }

  private _formElements(): JSX.Element[] {
    for (const [key, entries] of Object.entries(configs)) {
      const [game, runAt] = key.split('-')

      this._inputGroups(game, runAt, entries)
    }

    return this._groupsToElementList()
  }

  private _groupsToElementList(): JSX.Element[] {
    const groupedInputs: JSX.Element[] = []

    for (const [group, inputs] of Object.entries(this._groups)) {
      groupedInputs.push(<h3 className={`toggle-config ${inputs.header.join(' ')}`}>{group}</h3>)
      groupedInputs.push(...Object.values(inputs.inputs))
    }

    return groupedInputs
  }

  private _inputGroups(game: string, runAt: string, entries: IConfig): void {
    for (const [group, inputs] of Object.entries(entries)) {
      if (!inputs.length) {
        continue
      }

      if (this._groups[group]) {
        this._groups[group].header.push(`game-${game}`)

        if (!this._groups[group].header.includes(`type-${runAt}`)) {
          this._groups[group].header.push(`type-${game}`)
        }
      } else {
        this._groups[group] = {
          header: [`type-${runAt}`, `game-${game}`],
          inputs: {}
        }
      }

      this._formGroups(group, game, runAt, inputs)
    }
  }

  private _formGroups(group: string, game: string, runAt: string, inputs: Inputs[]): void {
    for (const input of inputs) {
      if (!this._groups[group].inputs[input.name]) {
        this._groups[group].inputs[input.name] = this._formGroup(game, runAt, input)
      }
    }
  }

  private _formGroup(game: string, runAt: string, input: Inputs): JSX.Element {
    if ('values' in input) {
      return this._selectFormGroup(game, runAt, input)
    }

    if ('step' in input) {
      return this._numericInputFormGroup(game, runAt, input)
    }

    return this._stringInputFormGroup(game, runAt, input)
  }

  private _selectFormGroup(game: string, runAt: string, input: ISelectNumber | ISelectString): JSX.Element {
    return (
      <div className={`form-group toggle-config game-${game} type-${runAt}`}>
        {this._label(input.name)}
        <select
          className="form-control form-control-sm"
          id={input.name}
          aria-describedby={`${input.name}Help`}
          defaultValue={input.default}
        >
          {this._options(input.values)}
        </select>
        {this._helpText(input.name, input.description)}
      </div>
    )
  }

  private _options(values: Options): JSX.Element[] {
    const options: JSX.Element[] = []

    for (const value of values) {
      if (typeof value === 'object' && 'key' in value) {
        options.push(<option value={value.key}>{value.value}</option>)
      } else {
        options.push(<option value={value}>{value}</option>)
      }
    }

    return options
  }

  private _numericInputFormGroup(game: string, runAt: string, input: IInputNumber): JSX.Element {
    return (
      <div className={`form-group toggle-config game-${game} type-${runAt}`}>
        {this._label(input.name)}
        <input
          type="number"
          className="form-control form-control-sm"
          id={input.name}
          aria-describedby={`${input.name}Help`}
          defaultValue={input.default}
          min={input.min}
          max={input.max}
          step={input.step}
        />
        {this._helpText(input.name, input.description)}
      </div>
    )
  }

  private _stringInputFormGroup(game: string, runAt: string, input: IInputString): JSX.Element {
    return (
      <div className={`form-group toggle-config game-${game} type-${runAt}`}>
        {this._label(input.name)}
        <input
          type="number"
          className="form-control form-control-sm"
          id={input.name}
          aria-describedby={`${input.name}Help`}
          defaultValue={input.default}
          placeholder={input.placeholder}
        />
        {this._helpText(input.name, input.description)}
      </div>
    )
  }

  private _label(cvar: string): JSX.Element {
    return (
      <label htmlFor={cvar} className="col-form-label col-form-label-sm">
        {cvar}
      </label>
    )
  }

  private _helpText(name: string, description: string): JSX.Element {
    return (
      <small id={`${name}Help`} className="form-text text-muted">
        {description}
      </small>
    )
  }

  private _download(): JSX.Element {
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
    return `//****************************************************************************\\\\
//*                                                                          *\\\\
//*                                                                          *\\\\
//* Counter-Strike: SOURCE CONFIG                                            *\\\\
//* VERSION 2.0.0                                                            *\\\\
//* WWW.ULRICH-BlOCK.DE            \t                                         *\\\\
//*                                                                          *\\\\
//* Um die Config zu laden tragt Folgendes in die autoexec.cfg ein:          *\\\\
//* exec ub.cfg                                                              *\\\\
//*                                                                          *\\\\
//* Fuer besseres Treffen und Spielgefuehl stellt noch                       *\\\\
//* folgende Startparameter ein:                                             *\\\\
//* -console -novid -noforcemspeed -noforcemaccel -noforcemparms -noaafonts  *\\\\
//* Rechtsklick in der Bibliothek auf Counter-Strike: Source                 *\\\\
//* Dort auf Eigenschaften -> Startoptionen -> copy und paste                *\\\\
//* Zusaetzlich koennt ihr noch vorgeben, welche DirectX Version             *\\\\
//* genutzt werden soll, indem ihr -dxlevel XX hinzufuegt                    *\\\\
//* Fuer XX: 80, 81, 90, 95, 100                                             *\\\\
//* In machen Faellen bringt ein niedriges dxlevel ein paar FPS              *\\\\
//*                                                                          *\\\\
//****************************************************************************\\\\

${this._configGroups()}
`
  }

  private _configGroups(): string {
    const selectedConfig = String(this._selectedValue('configSelect'))

    if (!selectedConfig || !configs[selectedConfig]) {
      return ''
    }

    const groupedInputs: string[] = []

    for (const [group, inputs] of Object.entries(this._mergeDeep(selectedConfig))) {
      groupedInputs.push(`//******${group}******//\n`)
      groupedInputs.push(this._configValues(inputs))
      groupedInputs.push('\n')
    }

    return groupedInputs.join('\n')
  }

  private _mergeDeep(selectedConfig: string): IConfig {
    const combinedConfig: IConfig = {}

    // TODO: more selective once there is more than hl2 clients
    for (const [group, inputs] of Object.entries(configs['hl2base-client'])) {
      if (inputs.length) {
        combinedConfig[group] = inputs.concat([])
      }
    }

    const gameConfig: IConfig = configs[selectedConfig]

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
        // TODO: escape quotes for strings once we have string values
        inputValues.push(`${input.name} "${inputValue}"\n`)
      }
    }

    return inputValues.join('\n')
  }

  private _selectedValue(id: string): number | string | undefined {
    const element = document.getElementById(id) as HTMLSelectElement

    if (element) {
      return element.options[element.selectedIndex].value
    }
  }

  private _inputValue(id): string | number | undefined {
    const element = document.getElementById(id) as HTMLInputElement

    if (element) {
      return element.value
    }
  }
}
