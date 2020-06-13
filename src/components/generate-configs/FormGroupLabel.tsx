import { Inputs } from './config-abstract'
import React from 'react'

interface ILabelProps {
  input: Inputs
}

export const FormGroupLabel = ({ input }: ILabelProps): JSX.Element => {
  return (
    <label htmlFor={input.name} className="col-form-label col-form-label-sm">
      {input.name}
    </label>
  )
}
