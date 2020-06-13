import { IConfig, ON_OFF } from '../../components/generate-configs/config-abstract'

export const SERVER_CSS: IConfig = {
  Pricing: [
    {
      name: 'mp_weapon_ak47_price',
      description: 'AK47 Preis',
      default: 2500,
      min: 1,
      max: 16000,
      step: 1
    },
    {
      name: 'mp_weapon_aug_price',
      description: 'Steyer Aug Preis',
      default: 3500,
      min: 1,
      max: 16000,
      step: 1
    },
    {
      name: 'mp_weapon_awp_price',
      description: 'AWP Preis',
      default: 4750,
      min: 1,
      max: 16000,
      step: 1
    },
    {
      name: 'mp_weapon_deagle_price',
      description: 'Desert Eagle Preis',
      default: 650,
      min: 1,
      max: 16000,
      step: 1
    },
    {
      name: 'mp_weapon_elite_price',
      description: 'Elite Preis',
      default: 800,
      min: 1,
      max: 16000,
      step: 1
    },
    {
      name: 'mp_weapon_famas_price',
      description: 'Famas Preis',
      default: 2250,
      min: 1,
      max: 16000,
      step: 1
    },
    {
      name: 'mp_weapon_fiveseven_price',
      description: 'Five Seven Preis',
      default: 2250,
      min: 1,
      max: 16000,
      step: 1
    },
    {
      name: 'mp_weapon_g3sg1_price',
      description: 'g3sg1 Preis',
      default: 5000,
      min: 1,
      max: 16000,
      step: 1
    },
    {
      name: 'mp_weapon_galil_price',
      description: 'Galil Preis',
      default: 2000,
      min: 1,
      max: 16000,
      step: 1
    },
    {
      name: 'mp_weapon_glock_price',
      description: 'Glock Preis',
      default: 400,
      min: 1,
      max: 16000,
      step: 1
    },
    {
      name: 'mp_weapon_m249_price',
      description: 'M249 Preis',
      default: 5750,
      min: 1,
      max: 16000,
      step: 1
    },
    {
      name: 'mp_weapon_m3_price',
      description: 'M3 Preis',
      default: 1700,
      min: 1,
      max: 16000,
      step: 1
    },
    {
      name: 'mp_weapon_m4a1_price',
      description: 'M4A1 Preis',
      default: 3100,
      min: 1,
      max: 16000,
      step: 1
    },
    {
      name: 'mp_weapon_mac10_price',
      description: 'Mac10 Preis',
      default: 1400,
      min: 1,
      max: 16000,
      step: 1
    },
    {
      name: 'mp_weapon_mp5navy_price',
      description: 'MP5 Navy Preis',
      default: 1500,
      min: 1,
      max: 16000,
      step: 1
    },
    {
      name: 'mp_weapon_p228_price',
      description: 'P228 Preis',
      default: 600,
      min: 1,
      max: 16000,
      step: 1
    },
    {
      name: 'mp_weapon_p90_price',
      description: 'P90 Preis',
      default: 2350,
      min: 1,
      max: 16000,
      step: 1
    },
    {
      name: 'mp_weapon_scout_price',
      description: 'Scout Preis',
      default: 2750,
      min: 1,
      max: 16000,
      step: 1
    },
    {
      name: 'mp_weapon_sg550_price',
      description: 'SG 550 Preis',
      default: 4200,
      min: 1,
      max: 16000,
      step: 1
    },
    {
      name: 'mp_weapon_sg552_price',
      description: 'SG 552 Preis',
      default: 3500,
      min: 1,
      max: 16000,
      step: 1
    },
    {
      name: 'mp_weapon_tmp_price',
      description: 'TMP Preis',
      default: 1250,
      min: 1,
      max: 16000,
      step: 1
    },
    {
      name: 'mp_weapon_ump45_price',
      description: 'UMP 45 Preis',
      default: 1700,
      min: 1,
      max: 16000,
      step: 1
    },
    {
      name: 'mp_weapon_usp_price',
      description: 'USP Preis',
      default: 500,
      min: 1,
      max: 16000,
      step: 1
    },
    {
      name: 'mp_weapon_xm1014_price',
      description: 'XM 1014 Preis',
      default: 3000,
      min: 1,
      max: 16000,
      step: 1
    }
  ],
  Sound: [
    {
      name: 'sv_hudhint_sound',
      description:
        'Wenn deaktiviert, werden keine Sounds durch das Hud abgespielt, die in der Regel eher nerven, als dass sie helfen.',
      values: ON_OFF,
      default: 0
    }
  ],
  Statistik: [
    {
      name: 'sv_disablefreezecam',
      description: 'Freeze Cam deaktivieren.',
      values: ON_OFF,
      default: 1
    },
    {
      name: 'sv_nonemesis',
      description: 'Domination und Revenge Anzeige deaktivieren.',
      values: [],
      default: 0
    },
    {
      name: 'sv_nomvp',
      description: 'MVP Stats auf dem Server deaktivieren.',
      values: ON_OFF,
      default: 0
    },
    {
      name: 'sv_nostats',
      description: 'Statistiken deaktivieren.',
      values: ON_OFF,
      default: 0
    }
  ],
  Gameplay: [
    {
      name: 'mp_fraglimit',
      description:
        'Erreicht ein Spieler diese Anzahl an Kills, wird die Map gewechselt. Standard ist 0. Bei 0 ist die Funktion deaktiviert',
      default: 0,
      min: 1,
      max: 16000,
      step: 1
    },
    {
      name: 'mp_maxrounds',
      description:
        'Maximale Rundenanzahl, die eine Map gespielt wird. Standard ist 0. Bei 0 ist die Funktion deaktiviert',
      default: 0,
      min: 1,
      max: 16000,
      step: 1
    },
    {
      name: 'mp_timelimit',
      description: 'Dauer, die eine Karte gespielt wird',
      default: 20,
      min: 1,
      max: 16000,
      step: 1
    },
    {
      name: 'mp_winlimit',
      description: 'Nach so vielen gewonnen Runden durch ein Team wird die Map vor Ablauf der Zeit gewechselt',
      default: 0,
      min: 1,
      max: 16000,
      step: 1
    },
    {
      name: 'mp_startmoney',
      description: 'Summe von Geld, die ein Spieler beim Verbinden auf dem Server erhält',
      default: 800,
      min: 1,
      max: 16000,
      step: 1
    },
    {
      name: 'mp_roundtime',
      description: 'Dauer in Minuten, die eine Runde läuft',
      default: 5,
      min: 1,
      max: 30,
      step: 1
    },
    {
      name: 'mp_buytime',
      description: 'Länge der Zeit in Minuten, in der man einkaufen kann',
      default: 0.5,
      min: 0.1,
      max: 120,
      step: 0.1
    },
    {
      name: 'mp_c4timer',
      description: 'Dauer bevor das C4 explodiert',
      default: 45,
      min: 1,
      max: 3600,
      step: 1
    },
    {
      name: 'mp_freezetime',
      description: 'Die Anzahl der Sekunden in denen sich die Spieler nicht bewegen können, bevor es los geht',
      default: 6,
      min: 1,
      max: 60,
      step: 1
    },
    {
      name: 'mp_spawnprotectiontime',
      description:
        'Kicke Spieler die innerhalb dieser Sekundenanzahl nach Rundenstart einen Teamkill begehen  0 um die Funktion zu deaktivieren.',
      default: 0,
      min: 1,
      max: 120,
      step: 1
    },
    {
      name: 'mp_hostagepenalty',
      description:
        'Anzahl an Geiseln, die getötet werden können, bevor man gekcikt wird.  0 um die Funktion zu deaktivieren.',
      default: 0,
      min: 1,
      max: 1000,
      step: 1
    },
    {
      name: 'sv_legacy_grenade_damage',
      description:
        'In einem der letzten Updates wurde der Schaden verändert, den man von Granaten bekommen hat, wenn man Rüstung besitzt. Wenn man das alte Schadensmodel haben will, kann man es mit diesem CVAR wieder aktivieren.',
      values: ON_OFF,
      default: 0
    },
    {
      name: 'mp_enableroundwaittime',
      description: 'Zwischen den Runden eine kurze Wartezeit einlegen.',
      values: ON_OFF,
      default: 0
    }
  ],
  Bots: [
    {
      name: 'bot_quota',
      description: 'Anzahl an Bots die dem Server hinzugefügt werden',
      default: 0,
      min: 1,
      max: 63,
      step: 1
    },
    {
      name: 'bot_quota_mode',
      description: 'Art, wie die Bot Anzahl gehalten wird. Bei fill werden Bots entfernt, wenn Spieler verbinden.',
      values: [
        { key: 'normal', value: 'Normal' },
        { key: 'fill', value: 'Gemäß Bot Quota' },
        { key: 'match', value: '1:1 zu Spielern' }
      ],
      default: 'fill'
    },
    {
      name: 'bot_prefix',
      description: 'Tag vor dem Namen der Bots',
      default: '',
      placeholder: '[www.to-be-announced.tk]'
    },
    {
      name: 'bot_eco_limit',
      description: 'Hat ein Bot weniger an Geld, als diese Summe, kauft er nicht ein.',
      default: 2000,
      min: 1,
      max: 10000,
      step: 1
    },
    {
      name: 'bot_difficulty',
      description: 'Schwierigkeit der Bots.',
      values: [
        { key: 0, value: 'Einfach' },
        { key: 1, value: 'Normal' },
        { key: 2, value: 'Hart' },
        { key: 3, value: 'Experte' }
      ],
      default: 1
    },
    {
      name: 'bot_chatter',
      description: 'Stellt ein, wie viel die Bots kommunizieren.',
      values: [
        { key: 'Off', value: 'Aus' },
        { key: 'Minimal', value: 'Minimal' },
        { key: 'Radio', value: 'Nur Radio' },
        { key: 'Normal', value: 'Normal' }
      ],
      default: ''
    },
    {
      name: 'bot_join_after_player',
      description:
        'Bei 0 sind die Bots immer auf dem Server. Bei 1 joinen sie erst, wenn menschliche Spieler den Server betreten.',
      values: [0, 1],
      default: 0
    },
    {
      name: 'bot_defer_to_human',
      description: 'Bots erledigen Missionsziele wie z.B. Geiseln holen, Bombe legen und entschaerfen.',
      values: ON_OFF,
      default: 1
    },
    {
      name: 'bot_auto_vacate',
      description: 'Gibt an wie viele Slots die Bots freilassen sollen.',
      default: 2,
      min: 1,
      max: 63,
      step: 1
    }
  ]
}
