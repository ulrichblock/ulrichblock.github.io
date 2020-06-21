import { IFormGroupContext, IInputString } from './config-abstract'
import Form from 'react-bootstrap/Form'
import React from 'react'

interface IFormGroupNumberInputProps extends IFormGroupContext {
  input: IInputString
  show: boolean
}

export const FormGroupStringInput = ({ game, input, runAt, show }: IFormGroupNumberInputProps): JSX.Element => {
  return (
    <Form.Group className={`toggle-config game-${game} type-${runAt}`} style={{ display: show ? 'block' : 'none' }}>
      <Form.Label htmlFor={input.name}>{input.name}</Form.Label>
      <Form.Control
        id={input.name}
        aria-describedby={`${input.name}Help`}
        defaultValue={input.default}
        placeholder={input.placeholder}
        type="number"
        size="sm"
      />
      <Form.Text id={`${input.name}Help`} className="text-muted">
        {input.description}
      </Form.Text>
    </Form.Group>
  )
}
