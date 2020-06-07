import 'bootstrap/dist/css/bootstrap.css'
import { Layout } from '../../components/layout'
import React from 'react'
import { SEO } from '../../components/seo'
import { Sidebar } from '../../components/sidebar/Sidebar'

function getNumeric(id: string, max: number, fallback: number): number {
  const element = document.getElementById(id)

  if (!element) {
    return fallback
  }

  const value = Number((element as HTMLInputElement).value)

  return !value || value > max ? fallback : value
}

function getAmount(): number {
  return getNumeric('amount', 10, 4)
}

function getLength(): number {
  return getNumeric('length', 100, 16)
}

function isChecked(id: string): boolean {
  const element = document.getElementById(id) as HTMLInputElement

  return element ? element.checked : true
}

function getChars(): string[] {
  let chars: string[] = []

  if (isChecked('small')) {
    chars = chars.concat([
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'o',
      'p',
      'q',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z'
    ])
  }

  if (isChecked('large')) {
    chars = chars.concat([
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z'
    ])
  }

  if (isChecked('numeric')) {
    chars = chars.concat(['1', '2', '3', '4', '5', '6', '7', '8', '9'])
  }

  if (isChecked('zero')) {
    chars.push('0')
  }

  if (isChecked('sonder')) {
    chars = chars.concat([
      '!',
      '"',
      '§',
      '$',
      '%',
      '&',
      '/',
      '(',
      ')',
      '=',
      '?',
      '+',
      '*',
      '#',
      ',',
      ';',
      '.',
      ':',
      '-',
      '_'
    ])
  }

  return chars
}

function random(max: number): number {
  return Math.round(Math.random() * max)
}

function generatePassword(chars: string[], length: number): string {
  const password: string[] = []

  for (let i = 0; i < length; i++) {
    password.push(chars[random(chars.length)])
  }

  return password.join('')
}

function generateSetPasswords(): void {
  const passwordText = document.getElementById('passwords') as HTMLTextAreaElement

  if (!passwordText) {
    return
  }

  const passwords: string[] = []
  const amount = getAmount()
  const chars = getChars()
  const length = getLength()

  for (let i = 0; i < amount; i++) {
    passwords.push(generatePassword(chars, length))
  }

  passwordText.value = passwords.join('\n')
}

let timeout
function onChange(): void {
  if (timeout) {
    clearTimeout(timeout)
    timeout = undefined
  }

  timeout = setTimeout(generateSetPasswords, 1000)
}

function onClick(): boolean {
  generateSetPasswords()
  return false
}

const PasswortGenerator = (): JSX.Element => (
  <Layout>
    <SEO title="Passwort Generator" />
    <div className="index-main">
      <div className="post-page-main">
        <form>
          <div className="form-group row">
            <label htmlFor="length" className="col-sm-4 col-form-label col-form-label-sm">
              Passwortl&auml;nge
            </label>
            <div className="col-sm-8">
              <input
                id="length"
                type="number"
                className="form-control form-control-sm"
                min={8}
                max={100}
                defaultValue={16}
                onChange={onChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="amount" className="col-sm-4 col-form-label col-form-label-sm">
              Anzahl der zu generierenden Passw&ouml;rter
            </label>
            <div className="col-sm-8">
              <input
                id="amount"
                type="number"
                className="form-control form-control-sm"
                min={1}
                max={10}
                defaultValue={4}
                onChange={onChange}
              />
            </div>
          </div>

          <fieldset className="form-group">
            <div className="row">
              <legend className="col-form-label col-sm-4 pt-0 col-form-label-sm">Parameter</legend>
              <div className="col-sm-8">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="small"
                    onChange={generateSetPasswords}
                    defaultChecked={true}
                  />
                  <label className="form-check-label form-control-sm" htmlFor="small">
                    Kleinbuchstaben
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="large"
                    onChange={generateSetPasswords}
                    defaultChecked={true}
                  />
                  <label className="form-check-label form-control-sm" htmlFor="large">
                    Gro&szlig;buchstaben
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="numeric"
                    onChange={generateSetPasswords}
                    defaultChecked={true}
                  />
                  <label className="form-check-label form-control-sm" htmlFor="numeric">
                    Zahlen (1-9)
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="zero"
                    onChange={generateSetPasswords}
                    defaultChecked={true}
                  />
                  <label className="form-check-label form-control-sm" htmlFor="zero">
                    Null (0)
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="sonder"
                    onChange={generateSetPasswords}
                    defaultChecked={true}
                  />
                  <label className="form-check-label form-control-sm" htmlFor="sonder">
                    Sonderzeichen
                  </label>
                </div>
              </div>
            </div>
          </fieldset>

          <div className="form-group row">
            <textarea className="form-control" id="passwords" rows={10} />
          </div>
          <div className="form-row">
            <button type="button" className="btn btn-primary" onClick={onClick}>
              Passwörter erstellen
            </button>
          </div>
        </form>
      </div>

      <div className="sidebar px-2 py-2">
        <Sidebar />
      </div>
    </div>
  </Layout>
)

export default PasswortGenerator
