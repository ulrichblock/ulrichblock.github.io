import { IFormGroupContext, ISelectNumber, ISelectString } from './config-abstract'
import { FormGroupHelpText } from './FormGroupHelpText'
import { FormGroupLabel } from './FormGroupLabel'
import React from 'react'
import { formGroupSelectOptions } from './formGroupSelectOptions'

interface IFormGroupSelectProps extends IFormGroupContext {
  input: ISelectNumber | ISelectString
  show: boolean
}

export const FormGroupSelect = ({ game, input, runAt, show }: IFormGroupSelectProps): JSX.Element => {
  return (
    <div className={`form-group toggle-config game-${game} type-${runAt}`} style={{ display: show ? 'block' : 'none' }}>
      <FormGroupLabel input={input} />
      <select
        className="form-control form-control-sm"
        id={input.name}
        aria-describedby={`${input.name}Help`}
        defaultValue={input.default}
      >
        {formGroupSelectOptions(input.values)}
      </select>
      <FormGroupHelpText input={input} />
    </div>
  )
}
