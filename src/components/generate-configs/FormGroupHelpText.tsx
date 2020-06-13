import { Inputs } from './config-abstract'
import React from 'react'

interface IHelpTextProps {
  input: Inputs
}

export const FormGroupHelpText = ({ input }: IHelpTextProps): JSX.Element => {
  return (
    <small id={`${input.name}Help`} className="form-text text-muted">
      {input.description}
    </small>
  )
}
