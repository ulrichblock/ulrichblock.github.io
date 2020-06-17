import Button from 'react-bootstrap/Button'
import { CHARS } from './chars'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import React from 'react'
import Row from 'react-bootstrap/Row'

export class GeneratePasswords extends React.Component {
  private _timeout: ReturnType<typeof setTimeout> | undefined

  public render(): JSX.Element {
    return (
      <Form>
        <Form.Group as={Row} controlId="length">
          <Form.Label column sm={4}>
            Passwortl&auml;nge
          </Form.Label>
          <Col sm={8}>
            <Form.Control type="number" size="sm" min={8} max={100} defaultValue={16} onChange={this._onChange} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="length">
          <Form.Label column sm={4}>
            Anzahl der zu generierenden Passw&ouml;rter
          </Form.Label>
          <Col sm={8}>
            <Form.Control type="number" size="sm" min={1} max={10} defaultValue={4} onChange={this._onChange} />
          </Col>
        </Form.Group>

        <fieldset className="form-group">
          <Row>
            <Form.Label as="legend" column sm={4}>
              Parameter
            </Form.Label>
            <Col sm={8}>
              <Form.Check
                type="checkbox"
                label="Kleinbuchstaben"
                id="small"
                onChange={this._generateSetPasswords}
                defaultChecked={true}
              />
              <Form.Check
                type="checkbox"
                label="Gro&szlig;buchstaben"
                id="large"
                onChange={this._generateSetPasswords}
                defaultChecked={true}
              />
              <Form.Check
                type="checkbox"
                label="Zahlen (1-9)"
                id="numeric"
                onChange={this._generateSetPasswords}
                defaultChecked={true}
              />
              <Form.Check
                type="checkbox"
                label="Null (0)"
                id="zero"
                onChange={this._generateSetPasswords}
                defaultChecked={true}
              />
              <Form.Check
                type="checkbox"
                label="Sonderzeichen"
                id="sonder"
                onChange={this._generateSetPasswords}
                defaultChecked={true}
              />
            </Col>
          </Row>
        </fieldset>

        <Form.Group as={Row} controlId="passwords">
          <Col>
            <Form.Control as="textarea" rows={10} />
          </Col>
        </Form.Group>

        <Form.Row className="float-right">
          <Button variant="primary" type="button" onClick={this._onClick}>
            Passw&ouml;rter erstellen
          </Button>
        </Form.Row>
      </Form>
    )
  }

  private _onClick = (): boolean => {
    this._generateSetPasswords()
    return false
  }

  private _onChange = (): void => {
    if (this._timeout) {
      clearTimeout(this._timeout)
      this._timeout = undefined
    }

    this._timeout = setTimeout(this._generateSetPasswords, 1000)
  }

  private _generateSetPasswords = (): void => {
    const passwordText = document.getElementById('passwords') as HTMLTextAreaElement

    if (!passwordText) {
      return
    }

    const passwords: string[] = []
    const amount = this._getAmount()
    const chars = this._getChars()
    const length = this._getLength()

    for (let i = 0; i < amount; i++) {
      passwords.push(this._generatePassword(chars, length))
    }

    passwordText.value = passwords.join('\n')
  }

  private _getAmount(): number {
    return this._getNumeric('amount', 10, 4)
  }

  private _random(max: number): number {
    return Math.floor(Math.random() * Math.floor(max))
  }

  private _getChars(): string[] {
    let chars: string[] = []

    if (this._isChecked('small')) {
      chars = chars.concat(CHARS.small)
    }

    if (this._isChecked('large')) {
      chars = chars.concat(CHARS.large)
    }

    if (this._isChecked('numeric')) {
      chars = chars.concat(CHARS.numeric)
    }

    if (this._isChecked('zero')) {
      chars = chars.concat(CHARS.zero)
    }

    if (this._isChecked('sonder')) {
      chars = chars.concat(CHARS.specialChars)
    }

    return chars
  }

  private _isChecked(id: string): boolean {
    const element = document.getElementById(id) as HTMLInputElement

    return element ? element.checked : true
  }

  private _getLength(): number {
    return this._getNumeric('length', 100, 16)
  }

  private _getNumeric(id: string, max: number, fallback: number): number {
    const element = document.getElementById(id)

    if (!element) {
      return fallback
    }

    const value = Number((element as HTMLInputElement).value)

    return !value || value > max ? fallback : value
  }

  private _generatePassword(chars: string[], length: number): string {
    const password: string[] = []

    for (let i = 0; i < length; i++) {
      password.push(chars[this._random(chars.length)])
    }

    return password.join('')
  }
}
