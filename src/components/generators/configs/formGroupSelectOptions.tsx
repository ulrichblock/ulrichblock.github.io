import { Options } from './config-abstract'
import React from 'react'

export function formGroupSelectOptions(values: Options): JSX.Element[] {
  const options: JSX.Element[] = []

  for (const value of values) {
    if (typeof value === 'object' && 'key' in value) {
      options.push(<option value={value.key}>{value.value}</option>)
    } else {
      options.push(<option value={value}>{value}</option>)
    }
  }

  return options
}
