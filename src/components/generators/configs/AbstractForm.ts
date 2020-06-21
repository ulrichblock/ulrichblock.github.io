import { IFormGroupConfigDownloadProps } from './config-abstract'
import React from 'react'

export abstract class AbstractForm extends React.Component<IFormGroupConfigDownloadProps> {
  protected _selectedValue(id: string): number | string | undefined {
    const element = document.getElementById(id) as HTMLSelectElement

    if (element && element.options[element.selectedIndex]) {
      return element.options[element.selectedIndex].value
    }
  }

  protected _inputValue(id: string): string | undefined {
    const element = document.getElementById(id) as HTMLInputElement

    if (element && element.value) {
      return element.value.replace(/"/g, "'")
    }
  }
}
