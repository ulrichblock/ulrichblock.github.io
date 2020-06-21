import { IFormGroupContext, ISelectNumber, ISelectString } from './config-abstract'
import Form from 'react-bootstrap/Form'
import React from 'react'
import { formGroupSelectOptions } from './formGroupSelectOptions'

interface IFormGroupSelectProps extends IFormGroupContext {
  input: ISelectNumber | ISelectString
  show: boolean
}

export const FormGroupSelect = ({ game, input, runAt, show }: IFormGroupSelectProps): JSX.Element => {
  return (
    <Form.Group className={`toggle-config game-${game} type-${runAt}`} style={{ display: show ? 'block' : 'none' }}>
      <Form.Label htmlFor={input.name}>{input.name}</Form.Label>
      <Form.Control
        id={input.name}
        aria-describedby={`${input.name}Help`}
        as="select"
        size="sm"
        defaultValue={input.default}
      >
        {formGroupSelectOptions(input.values)}
      </Form.Control>
      <Form.Text id={`${input.name}Help`} className="text-muted">
        {input.description}
      </Form.Text>
    </Form.Group>
  )
}
