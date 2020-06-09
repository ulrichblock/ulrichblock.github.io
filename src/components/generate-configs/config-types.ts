interface IBaseInput {
  name: string
  description: string
}

interface ISelectOptionNumber {
  key: number
  value: string
}

interface ISelectOptionString {
  key: string
  value: string
}

export interface ISelectNumber extends IBaseInput {
  values: number[] | ISelectOptionNumber[]
  default: number
}

export interface ISelectString extends IBaseInput {
  values: string[] | ISelectOptionString[]
  default: string
}

export type Options = number[] | string[] | ISelectOptionNumber[] | ISelectOptionString[]

export interface IInputNumber extends IBaseInput {
  default: number
  min: number
  max: number
  step: number
}

export interface IInputString extends IBaseInput {
  default: string
  placeholder: string
}

export type Inputs = ISelectNumber | ISelectString | IInputNumber | IInputString

export interface IConfig {
  [key: string]: Array<Inputs>
}
