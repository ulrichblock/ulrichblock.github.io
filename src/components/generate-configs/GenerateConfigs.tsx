import { IConfig, IFormGroupConfigDownloadProps, Inputs } from './config-abstract'
import { FormGroupConfigDownload } from './FormGroupConfigDownload'
import { FormGroupConfigSelect } from './FormGroupConfigSelect'
import { FormGroupNumberInput } from './FormGroupNumberInput'
import { FormGroupSelect } from './FormGroupSelect'
import { FormGroupStringInput } from './FormGroupStringInput'
import { FormHeader } from './FormHeader'
import { HL2ClientText } from './HL2ClientText'
import { HL2ServerText } from './HL2ServerText'
import React from 'react'

interface IInputs {
  [key: string]: JSX.Element
}

interface IInputGroups {
  [key: string]: {
    header: string[]
    inputs: IInputs
  }
}

export class GenerateConfigs extends React.Component<IFormGroupConfigDownloadProps> {
  private _groups: IInputGroups = {}

  public render(): JSX.Element {
    return (
      <form>
        <FormGroupConfigSelect />
        <HL2ClientText />
        <HL2ServerText />
        {this._formElements()}
        <FormGroupConfigDownload configs={this.props.configs} />
      </form>
    )
  }

  private _formElements(): JSX.Element[] {
    for (const [key, entries] of Object.entries(this.props.configs ?? {})) {
      const [game, runAt] = key.split('-')

      this._inputGroups(game, runAt, entries)
    }

    return this._groupsToElementList()
  }

  private _groupsToElementList(): JSX.Element[] {
    const groupedInputs: JSX.Element[] = []

    for (const [group, inputs] of Object.entries(this._groups)) {
      groupedInputs.push(
        <FormHeader
          classes={inputs.header.join(' ')}
          group={group}
          show={inputs.header.includes('type-client') || inputs.header.includes('game-css')}
        />
      )
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
        if (!this._groups[group].header.includes(`type-${runAt}`)) {
          this._groups[group].header.push(`type-${game}`)
        }

        if (!this._groups[group].header.includes(`game-${game}`)) {
          this._groups[group].header.push(`game-${game}`)
        }
      } else {
        this._groups[group] = {
          header: [`game-${game}`, `type-${runAt}`],
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
      return <FormGroupSelect game={game} runAt={runAt} input={input} show={this._show(game, runAt)} />
    }

    if ('step' in input) {
      return <FormGroupNumberInput game={game} runAt={runAt} input={input} show={this._show(game, runAt)} />
    }

    return <FormGroupStringInput game={game} runAt={runAt} input={input} show={this._show(game, runAt)} />
  }

  private _show(game: string, runAt: string): boolean {
    return (game === 'css' || game === 'hl2base') && runAt === 'client'
  }
}
