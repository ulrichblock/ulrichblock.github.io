import { AbstractForm } from './AbstractForm'
import { FormGroupHelpText } from './FormGroupHelpText'
import { IInputString } from './config-abstract'
import React from 'react'
import { formGroupSelectOptions } from './formGroupSelectOptions'

export class FormGroupConfigSelect extends AbstractForm {
  render(): JSX.Element {
    const options = [
      { key: 'css-client', value: 'Counter-Strike: Source Client' },
      { key: 'css-server', value: 'Counter-Strike: Source Server' },
      { key: 'dods-client', value: 'Day of Defeat: Source Client' },
      { key: 'dods-server', value: 'Day of Defeat: Source Server' },
      { key: 'tf2-client', value: 'Team Fortress 2 Client' },
      { key: 'tf2-server', value: 'Team Fortress 2 Server' }
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
          {formGroupSelectOptions(options)}
        </select>
        <FormGroupHelpText
          input={
            { description: 'Spiel und Typ der zu erstellenden Config Datei.', name: 'configSelectHelp' } as IInputString
          }
        />
      </div>
    )
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
}
