import { AbstractForm } from './AbstractForm'
import Form from 'react-bootstrap/Form'
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
      <Form.Group controlId="configSelect">
        <Form.Label>Email address</Form.Label>
        <Form.Control as="select" size="sm" onChange={this._onConfigSelected} defaultValue="css-client">
          {formGroupSelectOptions(options)}
        </Form.Control>
        <Form.Text className="text-muted">Spiel und Typ der zu erstellenden Config Datei.</Form.Text>
      </Form.Group>
    )
  }

  _onConfigSelected = (): undefined => {
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
