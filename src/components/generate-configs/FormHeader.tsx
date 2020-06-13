import React from 'react'

interface IFormHeaderProps {
  classes: string
  group: string
  show: boolean
}

export const FormHeader = ({ classes, group, show }: IFormHeaderProps): JSX.Element => {
  return (
    <div className={`toggle-config ${classes}`} style={{ display: show ? 'block' : 'none' }}>
      <h3>{group}</h3>
    </div>
  )
}
