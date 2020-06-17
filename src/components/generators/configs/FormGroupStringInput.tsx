import { IFormGroupContext, IInputString } from './config-abstract'
import { FormGroupHelpText } from './FormGroupHelpText'
import { FormGroupLabel } from './FormGroupLabel'
import React from 'react'

interface IFormGroupNumberInputProps extends IFormGroupContext {
  input: IInputString
  show: boolean
}

export const FormGroupStringInput = ({ game, input, runAt, show }: IFormGroupNumberInputProps): JSX.Element => {
  return (
    <div className={`form-group toggle-config game-${game} type-${runAt}`} style={{ display: show ? 'block' : 'none' }}>
      <FormGroupLabel input={input} />
      <input
        type="text"
        className="form-control form-control-sm"
        id={input.name}
        aria-describedby={`${input.name}Help`}
        defaultValue={input.default}
        placeholder={input.placeholder}
      />
      <FormGroupHelpText input={input} />
    </div>
  )
}
