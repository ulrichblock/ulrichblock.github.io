import { IFormGroupContext, IInputNumber } from './config-abstract'
import { FormGroupHelpText } from './FormGroupHelpText'
import { FormGroupLabel } from './FormGroupLabel'
import React from 'react'

interface IFormGroupNumberInputProps extends IFormGroupContext {
  input: IInputNumber
  show: boolean
}

export const FormGroupNumberInput = ({ game, input, runAt, show }: IFormGroupNumberInputProps): JSX.Element => {
  return (
    <div className={`form-group toggle-config game-${game} type-${runAt}`} style={{ display: show ? 'block' : 'none' }}>
      <FormGroupLabel input={input} />
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
      <FormGroupHelpText input={input} />
    </div>
  )
}
