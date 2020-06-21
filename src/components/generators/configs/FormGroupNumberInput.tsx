import { IFormGroupContext, IInputNumber } from './config-abstract'
import Form from 'react-bootstrap/Form'
import React from 'react'

interface IFormGroupNumberInputProps extends IFormGroupContext {
  input: IInputNumber
  show: boolean
}

export const FormGroupNumberInput = ({ game, input, runAt, show }: IFormGroupNumberInputProps): JSX.Element => {
  return (
    <Form.Group className={`toggle-config game-${game} type-${runAt}`} style={{ display: show ? 'block' : 'none' }}>
      <Form.Label htmlFor={input.name}>{input.name}</Form.Label>
      <Form.Control
        id={input.name}
        aria-describedby={`${input.name}Help`}
        defaultValue={input.default}
        min={input.min}
        max={input.max}
        step={input.step}
        type="number"
        size="sm"
      />
      <Form.Text id={`${input.name}Help`} className="text-muted">
        {input.description}
      </Form.Text>
    </Form.Group>
  )
}
