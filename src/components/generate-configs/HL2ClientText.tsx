import { Link } from 'gatsby'
import React from 'react'

export const HL2ClientText = (): JSX.Element => {
  return (
    <div className={'toggle-config game-hl2base type-client'}>
      Die Voreinstellungen sind f&uuml;r maximale FPS ausgelegt. Die fertige Datei downloaden und in der autoexec.cfg
      folgendes eintragen: <b>exec ub.cfg</b> Alternativ kannst du auch diese{' '}
      <Link to="./autoexec.cfg">autoexec.cfg</Link> downloaden.
    </div>
  )
}
