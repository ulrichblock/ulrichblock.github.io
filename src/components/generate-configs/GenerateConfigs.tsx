import React from 'react'
import clientCss from './config-client-css.json'

interface IBaseInput {
  name: string
  description: string
}

interface ISelectOptionNumber {
  key: number
  value: string
}

interface ISelectOptionString {
  key: string
  value: string
}

interface ISelectNumber extends IBaseInput {
  values: number[] | ISelectOptionNumber[]
  default: number
}

interface ISelectString extends IBaseInput {
  values: string[] | ISelectOptionString[]
  default: string
}

type Options = number[] | string[] | ISelectOptionNumber[] | ISelectOptionString[]

interface IInputNumber extends IBaseInput {
  default: number
  min: number
  max: number
  step: number
}

interface IInputString extends IBaseInput {
  default: string
  placeholder: string
}

type Inputs = ISelectNumber | ISelectString | IInputNumber | IInputString

interface IConfig {
  [key: string]: Array<Inputs>
}

interface IInputConfig {
  [key: string]: IConfig
}

export class GenerateConfigs extends React.Component {
  private _configs: IInputConfig = {
    'css-client': clientCss as IConfig
  }

  public render(): JSX.Element {
    return (
      <form>
        {this._formElements()}
        {this._download()}
      </form>
    )
  }

  private _download(): JSX.Element {
    return (
      <div className="form-row">
        <a id="download_link" download="ub.cfg" href="">
          <button type="button" className="btn btn-primary" onClick={this.onClick}>
            Erstellen
          </button>
        </a>
      </div>
    )
  }

  private _formElements(): JSX.Element[] {
    const elements: JSX.Element[] = []

    for (const [key, entries] of Object.entries(this._configs)) {
      const [game, runAt] = key.split(key)

      elements.push(...this._inputGroups(game, runAt, entries))
    }

    return elements
  }

  private _inputGroups(game: string, runAt: string, entries): JSX.Element[] {
    const groupedInputs: JSX.Element[] = []

    for (const [group, inputs] of Object.entries(entries)) {
      groupedInputs.push(<h3 className={`${game} ${runAt}`}>{group}</h3>)
      groupedInputs.push(...this._fromGroups(game, runAt, inputs as Inputs[]))
    }

    return groupedInputs
  }

  private _fromGroups(game: string, runAt: string, inputs: Inputs[]): JSX.Element[] {
    const inputElements: JSX.Element[] = []

    for (const input of inputs) {
      if ('values' in input) {
        inputElements.push(this._selectFormGroup(game, runAt, input))
      } else if ('step' in input) {
        inputElements.push(this._numericInputFormGroup(game, runAt, input))
      } else {
        inputElements.push(this._stringInputFormGroup(game, runAt, input))
      }
    }

    return inputElements
  }

  private _selectFormGroup(game: string, runAt: string, input: ISelectNumber | ISelectString): JSX.Element {
    return (
      <div className={`form-group ${game} ${runAt}`}>
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
      <div className={`form-group ${game} ${runAt}`}>
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
      <div className={`form-group ${game} ${runAt}`}>
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

  onClick = (): void => {
    console.log('clicked')
    console.log(this._config())
    const data = new Blob([this._config()], { type: 'text/plain' })
    const url = window.URL.createObjectURL(data)

    const anchor = document.getElementById('download_link') as HTMLAnchorElement

    if (anchor && 'href' in anchor) {
      anchor.href = url
    }
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
    const groupedInputs: string[] = []

    // TODO: game from selector
    for (const [group, inputs] of Object.entries(this._configs['css-client'])) {
      groupedInputs.push(`//******${group}******//\n`)
      groupedInputs.push(this._configValues(inputs))
      groupedInputs.push('\n')
    }

    return groupedInputs.join('\n')
  }

  private _configValues(inputs: Inputs[]): string {
    const inputValues: string[] = []

    for (const input of inputs) {
      if ('values' in input) {
        const element = document.getElementById(input.name) as HTMLSelectElement

        if (element) {
          // TODO: umlaute to "ue"
          inputValues.push(`// ${input.description}`)
          // TODO: escape quotes for strings
          inputValues.push(`${input.name} "${element.options[element.selectedIndex].value}"\n`)
        }
      }
    }

    return inputValues.join('\n')
  }
}
