import { IConfig, ON_OFF } from '../config-abstract'

export const SERVER_TF2: IConfig = {
  Gameplay: [
    {
      name: 'tf_arena_change_limit',
      description: '',
      default: 1,
      min: 0,
      max: 10,
      step: 1
    },
    {
      name: 'tf_arena_max_streak',
      description: 'Teams werden aufgelöst, wenn eines diese Anzahl an Siegen erreicht.',
      default: 21,
      min: 0,
      max: 100,
      step: 1
    },
    {
      name: 'tf_flag_caps_per_round',
      description: 'Anzahl von Flaggen Eroberungen pr Runde auf CTF und PASS Zeit maps. 0 um zu deaktieren.',
      default: 0,
      min: 0,
      max: 100,
      step: 1
    },
    {
      name: 'tf_overtime_nag',
      description: 'Kündigt Overtime nag an.',
      values: ON_OFF,
      default: 0
    },
    {
      name: 'tf_weapon_criticals',
      description: 'Zufällige kritische Treffer.',
      values: ON_OFF,
      default: 1
    },
    {
      name: 'tf_damage_disablespread',
      description: 'Aktiviert die zufällige Schadensverteilung.',
      values: ON_OFF,
      default: 1
    },
    {
      name: 'mp_bonusroundtime',
      description: 'Zeit nach Runden Sieg, bis die nächste Runde startet.',
      default: 15,
      min: 0,
      max: 120,
      step: 1
    },
    {
      name: 'mp_idlemaxtime',
      description: 'Maximale Zeit, die ein Spieler idlen darf (in Minuten).',
      default: 0,
      min: 3,
      max: 60,
      step: 1
    },
    {
      name: 'mp_disable_respawn_times',
      description: 'Kein Zeit auf den Respawn warten',
      values: ON_OFF,
      default: 0
    },
    {
      name: 'mp_enableroundwaittime',
      description: 'Den Timer zum Warten zwischen den Runden aktivieren.',
      values: ON_OFF,
      default: 1
    },
    {
      name: 'mp_idledealmethod',
      description: 'Wie mit inaktiven Spielern umzugehen ist.',
      values: [
        { key: 0, value: 'Aus' },
        { key: 1, value: 'Zuschauer > Kick wenn inaktiv' },
        { key: 2, value: 'Kick' }
      ],
      default: 1
    },
    {
      name: 'mp_stalemate_enable',
      description: 'Stalemate Modus aktivieren.',
      values: ON_OFF,
      default: 0
    },
    {
      name: 'mp_stalemate_meleeonly',
      description: 'Alle Spieler im Stalemate Modus auf Handwaffen limitieren.',
      values: ON_OFF,
      default: 0
    },
    {
      name: 'mp_stalemate_timelimit',
      description: 'Maximale Zeit des Stalemate Modus (in Sekunden).',
      default: 240,
      min: 1,
      max: 1200,
      step: 1
    },
    {
      name: 'mp_time_between_capscoring',
      description: 'Zeit zwischen dem Scoring von Capture Points. (in Sekunden).',
      default: 30,
      min: 1,
      max: 1200,
      step: 1
    },
    {
      name: 'mp_teamplay',
      description: 'Team Play.',
      values: ON_OFF,
      default: 0
    }
  ],
  'Spieler Klassen': [
    {
      name: 'tf_tournament_classlimit_demoman',
      description: 'Limitiert die Anzahl von Spielern mit der Klasse Demoman.',
      default: -1,
      min: -1,
      max: 32,
      step: 1
    },
    {
      name: 'tf_tournament_classlimit_engineer',
      description: 'Limitiert die Anzahl von Spielern mit der Klasse Engineer.',
      default: 2,
      min: -1,
      max: 32,
      step: 1
    },
    {
      name: 'tf_tournament_classlimit_heavy',
      description: 'Limitiert die Anzahl von Spielern mit der Klasse Heavy Guy.',
      default: 2,
      min: -1,
      max: 32,
      step: 1
    },
    {
      name: 'tf_tournament_classlimit_medic',
      description: 'Limitiert die Anzahl von Spielern mit der Klasse Medic.',
      default: 1,
      min: -1,
      max: 32,
      step: 1
    },
    {
      name: 'tf_tournament_classlimit_pyro',
      description: 'Limitiert die Anzahl von Spielern mit der Klasse Pyro.',
      default: 2,
      min: -1,
      max: 32,
      step: 1
    },
    {
      name: 'tf_tournament_classlimit_scout',
      description: 'Limitiert die Anzahl von Spielern mit der Klasse Scout.',
      default: 2,
      min: -1,
      max: 32,
      step: 1
    },
    {
      name: 'tf_tournament_classlimit_sniper',
      description: 'Limitiert die Anzahl von Spielern mit der Klasse Sniper.',
      default: 2,
      min: -1,
      max: 32,
      step: 1
    },
    {
      name: 'tf_tournament_classlimit_soldier',
      description: 'Limitiert die Anzahl von Spielern mit der Klasse Soldier.',
      default: 2,
      min: -1,
      max: 32,
      step: 1
    },
    {
      name: 'tf_tournament_classlimit_spy',
      description: 'Limitiert die Anzahl von Spielern mit der Klasse Spion.',
      default: 2,
      min: -1,
      max: 32,
      step: 1
    }
  ]
}
