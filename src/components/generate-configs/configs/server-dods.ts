import { IConfig, ON_OFF } from '../config-abstract'

export const SERVER_DODS: IConfig = {
  Gameplay: [
    {
      name: 'dod_bonusround',
      description: 'Nach Rundensieg Bonusrunde erlauben.',
      values: ON_OFF,
      default: 0
    },
    {
      name: 'dod_bonusroundtime',
      description: 'Länge der Bonusrunde in Sekunden.',
      default: 10,
      min: 0,
      max: 120,
      step: 1
    },
    {
      name: 'dod_enableroundwaittime',
      description: 'Warten, bevor die Runde gestartet wird.',
      values: ON_OFF,
      default: 1
    },
    {
      name: 'dod_freezecam',
      description: 'Zeige dem Spieler ein Standbild von dem Gegner, der ihn getötet hat.',
      values: ON_OFF,
      default: 1
    }
  ],
  'Spieler Klassen': [
    {
      name: 'mp_limit_allies_rifleman',
      description: 'Anzahl Alliierte Grenadier -> Garand',
      default: 3,
      min: -1,
      max: 32,
      step: 1
    },
    {
      name: 'mp_limit_allies_support',
      description: 'Anzahl Alliierte Sturmtrupp -> Tompson',
      default: -1,
      min: -1,
      max: 32,
      step: 1
    },
    {
      name: 'mp_limit_allies_assault',
      description: 'Anzahl Alliierte Unterstützung -> BAR',
      default: -1,
      min: -1,
      max: 32,
      step: 1
    },
    {
      name: 'mp_limit_allies_sniper',
      description: 'Anzahl Alliierte Scharfschütze -> Springfield',
      default: 1,
      min: -1,
      max: 32,
      step: 1
    },
    {
      name: 'mp_limit_allies_mg',
      description: 'Anzahl Alliierte MG-Schütze -> .30 cal',
      default: 1,
      min: -1,
      max: 32,
      step: 1
    },
    {
      name: 'mp_limit_allies_rocket',
      description: 'Anzahl Alliierte Raketenjäger -> Bazooka',
      default: 2,
      min: -1,
      max: 32,
      step: 1
    },
    {
      name: 'mp_limit_axis_rifleman',
      description: 'Anzahl Achsenmächte Grenadier -> Mauser K98k',
      default: 3,
      min: -1,
      max: 32,
      step: 1
    },
    {
      name: 'mp_limit_axis_support',
      description: 'Anzahl Achsenmächte Sturmtrupp -> MP 40',
      default: -1,
      min: -1,
      max: 32,
      step: 1
    },
    {
      name: 'mp_limit_axis_assault',
      description: 'Anzahl Achsenmächte Unterstützung -> Stg44',
      default: -1,
      min: -1,
      max: 32,
      step: 1
    },
    {
      name: 'mp_limit_axis_sniper',
      description: 'Anzahl Achsenmächte Scharfschütze -> K98 Scharfschützengewehr',
      default: 1,
      min: -1,
      max: 32,
      step: 1
    },
    {
      name: 'mp_limit_axis_mg',
      description: 'Anzahl Achsenmächte MG-Schütze -> MG 42',
      default: 1,
      min: -1,
      max: 32,
      step: 1
    },
    {
      name: 'mp_limit_axis_rocket',
      description: 'Anzahl Achsenmächte Raketenjäger -> Panzerschreck',
      default: 2,
      min: -1,
      max: 32,
      step: 1
    }
  ]
}
