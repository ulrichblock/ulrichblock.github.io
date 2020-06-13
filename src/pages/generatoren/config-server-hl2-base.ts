import { IConfig, ON_OFF } from '../../components/generate-configs/config-abstract'

export const SERVER_HL2_BASE: IConfig = {
  Anzeige: [
    {
      name: 'hostname',
      description: 'Definiert den Servernamen, der im Serverbrowser angezeigt wird',
      default: '',
      placeholder: 'Mein Server Name',
      required: true
    },
    {
      name: 'sv_password',
      description: 'Für war und private Server benutzen. Lässt man es leer, wird keins gesetzt',
      default: ''
    },
    {
      name: 'sv_contact',
      description: 'Kontakt Adresse vom Servereigentümer',
      default: '',
      placeholder: 'deineEmail@mail.de'
    },
    {
      name: 'sv_tags',
      description: 'Serverbeschreibung die in der Serliste angezeigt wird',
      default: '',
      placeholder: 'deineHP, Hlstatsx'
    },
    {
      name: 'motdfile',
      description:
        'Eigene Motdfile, die nicht überschrieben werden kann. Ist im Mod Ordner orangebox/cstrike erstellen. Sie wird in HTML geschrieben. Wenn man eine reine Textdatei nutzen will, leer lassen.',
      default: 'custommotd.txt'
    },
    {
      name: 'motdfile_text',
      description:
        'Eigene Motdfile, die nicht überschrieben werden kann. Bitte im Mod Ordner orangebox/cstrike erstellen Sie darf nur Text enthalten. Wenn man html nutzen will, leer lassen.',
      default: ''
    },
    {
      name: 'sv_region',
      description:
        'Region für die Serverliste. 3=Europa 255=Welt. Je nach Update mal verbugt und mal nicht. Deswegen besser immer auf 255 stellen.',
      values: [
        {
          key: 0,
          value: 'Ostküste'
        },
        {
          key: 1,
          value: 'Westküste'
        },
        {
          key: 2,
          value: 'Süd Amerika'
        },
        {
          key: 3,
          value: 'Europa'
        },
        {
          key: 4,
          value: 'Asien'
        },
        {
          key: 5,
          value: 'Australien'
        },
        {
          key: 6,
          value: 'Mittlerer Osten'
        },
        {
          key: 7,
          value: 'Afrika'
        },
        {
          key: 255,
          value: 'Welt'
        }
      ],
      default: 255
    }
  ],
  Admin: [
    {
      name: 'rcon_password',
      description: 'Das Rcon Passwort für die Remote Kontrolle',
      default: '',
      placeholder: 'DeinGanzSicheresRconPasswort'
    },
    {
      name: 'sv_rcon_minfailures',
      description: 'Minimal erlaubte Anzahl an fehlgeschlagenen Rcon Log In Versuchen, die zum temp Ban führen.',
      default: 3,
      min: 1,
      max: 100,
      step: 1
    },
    {
      name: 'sv_rcon_maxfailures',
      description: 'Maximale erlaubte Anzahl an fehlgeschlagenen Rcon Log In Versuchen, die zum Ban führen.',
      default: 5,
      min: 1,
      max: 100,
      step: 1
    },
    {
      name: 'sv_rcon_banpenalty',
      description: 'Dauer des Bans für das Erreichen von sv_rcon_maxfailures. 0 = Permanent',
      default: 0,
      min: 0,
      max: 10000,
      step: 1
    },
    {
      name: 'sv_rcon_minfailuretime',
      description: 'Dauer des Bans für das Erreichen von sv_rcon_minfailuretime.',
      default: 15,
      min: 1,
      max: 10000,
      step: 1
    }
  ],
  Performance: [
    {
      name: 'fps_max',
      description:
        'Maximale FPS, die der Server erreichen kann. Server FPS sind Netzwerkoperationen in der Sekunde 0 bedeutet, je nach System maximal 900-1000 FPS',
      default: 500,
      min: 33,
      max: 10000,
      step: 1
    },
    {
      name: 'host_framerate',
      description: 'Kontrolliert die Server Framerate. Andere Werte als 0 lassen den Server langsamer werden.',
      default: 0,
      min: 0,
      max: 100,
      step: 1
    }
  ],
  Customizing: [
    {
      name: 'sv_downloadurl',
      description: 'Für den Fastdownload hier bitte die Downloadurl einstellen.',
      default: '',
      placeholder: 'http://www.deinedomain.de/fastdownload'
    },
    {
      name: 'net_maxfilesize',
      description: 'Maximal Größe von Dateien wie Maps, die man downloaden kann. 64MB ist der Maximalwert.',
      default: 64,
      min: 0,
      max: 500,
      step: 1
    },
    {
      name: 'sv_allowdownload',
      description: 'Custom Content wie Spraylogos können gedownloaded werden',
      values: ON_OFF,
      default: 0
    },
    {
      name: 'sv_allowupload',
      description:
        'Spray Logos usw dürfen hochgeladen werden. Lieber ausstellen, weil es Sicherheitsluecken dabei gibt.',
      values: ON_OFF,
      default: 0
    },
    {
      name: 'sv_allow_voice_from_file',
      description: 'Den Befehl voice_inputfromfile für Clients erlauben.',
      values: ON_OFF,
      default: 0
    }
  ],
  'Competitive Gaming': [
    {
      name: 'sv_pure',
      description:
        'Bei 0 werden die Dateien der Spieler nicht überprüft. Für Public Server sollte man diesen Wert nehmen. Bei 1 werden alle Dateien der Spieler mit Ausnahme der in der pure_server_whitelist.txt aufgezählten überprüft. Bei 2 werden alle Dateien der Spieler ohne Ausnahme überprüft. Bei 1 und 2 können auch keine Sounds von Plugins genutzt werden.',
      values: [
        {
          key: 0,
          value: 'Aus'
        },
        {
          key: 1,
          value: 'Whitelist'
        },
        {
          key: 2,
          value: 'Alle'
        }
      ],
      default: 0
    },
    {
      name: 'sv_pure_kick_clients',
      description:
        'Wenn sv_pure 1 oder 2 gesetz wurde, werden bei 1 Clients mit Custom Dateien wie Waffen Skins gekickt. Bei 0 wird eine Warnung ausgesprochen.',
      values: ON_OFF,
      default: 0
    },
    {
      name: 'sv_consistency',
      description: 'Wenn aktiviert, werden Clients mit Custom Content gekickt..',
      values: ON_OFF,
      default: 0
    },
    {
      name: 'sv_allow_color_correction',
      description: 'Color Corection bei den Clients erlauben.',
      values: ON_OFF,
      default: 0
    },
    {
      name: 'sv_allow_wait_command',
      description: 'Den "wait" Befehl bei den Clients erlauben.',
      values: ON_OFF,
      default: 0
    },
    {
      name: 'sv_allowminmodels',
      description: 'Den Config Befehl cl_minmodels erlauben, der es dem Client gestattet, nur ein Model zu benutzen.',
      values: ON_OFF,
      default: 1
    },
    {
      name: 'sv_competitive_minspec',
      description:
        'Aktiviert den Wettkampfmodus, der bei den Spielern folgende Config Werte erzwingt, auch wenn sie andere eingestellt haben. r_drawdetailprops 1, r_staticprop_lod (-1 to 3), fps_max minimum 60 (or 0), cl_detailfade minimum 400, cl_detaildist minimum 1200, cl_interp (0 to 0.031), cl_interp_ratio (1 to 2).',
      values: ON_OFF,
      default: 0
    },
    {
      name: 'sv_cheats',
      description: 'Consolen Cheats erlauben.',
      values: ON_OFF,
      default: 0
    },
    {
      name: 'mp_autocrosshair',
      description: 'Automatisches Zielen.',
      values: ON_OFF,
      default: 0
    }
  ],
  Kommunikation: [
    {
      name: 'sv_alltalk',
      description: 'Jeder kann mit jedem, auch den Gegnern reden.',
      values: ON_OFF,
      default: 1
    },
    {
      name: 'sv_voiceenable',
      description: 'Ingame Voice erlauben.',
      values: ON_OFF,
      default: 1
    },
    {
      name: 'mp_chattime',
      description: 'Dauer in Sekunden, in der man nach Rundenende chatten kann',
      default: 10,
      min: 0,
      max: 3600,
      step: 1
    }
  ],
  Sound: [
    {
      name: 'mp_footsteps',
      description: 'Schritte hörbar',
      values: ON_OFF,
      default: 1
    }
  ],
  Physik: [
    {
      name: 'sv_friction',
      description: 'Nachrutschen von Spielern und Objekten in der Welt.',
      default: 5,
      min: 0,
      max: 500,
      step: 1
    },
    {
      name: 'sv_stopspeed',
      description: 'Geschwindigkeit, mit der aus dem Laufen gestoppt wird.',
      default: 50,
      min: 0,
      max: 1000,
      step: 1
    },
    {
      name: 'sv_gravity',
      description: 'Die Schwerkraft. Standard ist 800.',
      default: 800,
      min: 0,
      max: 10000,
      step: 1
    },
    {
      name: 'sv_accelerate',
      description:
        'Beschleunigung beim Laufen. Bei Surf Servern einen hoher Wert 100+ setzen, wenn auch auf dem Boden beschleunigt werden soll.',
      default: 5,
      min: 0,
      max: 1000,
      step: 1
    },
    {
      name: 'sv_airaccelerate',
      description: 'Beschleunigung in der Luft. Bei Surf Servern einen hoher Wert 100+ setzen.',
      default: 10,
      min: 0,
      max: 1000,
      step: 1
    },
    {
      name: 'sv_wateraccelerate',
      description:
        'Beschleunigung im Wasser. Bei Surf Servern einen hoher Wert 100+ setzen, wenn auch im Wasser beschleunigt werden soll.',
      default: 10,
      min: 0,
      max: 1000,
      step: 1
    },
    {
      name: 'phys_pushscale',
      description:
        'Die Stärke der physikalischen Aktionen wie das wegfliegen von Leichen und Objekte wird verändert. Je höher der Wert, desto weiter fliegen die Leichen',
      default: 1,
      min: 1,
      max: 16000,
      step: 1
    },
    {
      name: 'phys_timescale',
      description:
        'Die Geschwindigkeit der physikalischen Aktionen wie das Wegfliegen von Leichen und die Türgeschwindigkeit wird verändert.',
      default: 1,
      min: 1,
      max: 16000,
      step: 1
    },
    {
      name: 'phys_impactforcescale',
      description: 'Die Einschlagskraft eine Projectiles. 1 ist Standard',
      default: 1,
      min: 1,
      max: 16000,
      step: 1
    },
    {
      name: 'sv_enableboost',
      description:
        'In einem der letzten Updates wurde das sog. Flashboosting, bei dem man höher springen kann, indem man die Explosion von Granaten nutzt deaktiviert. Wenn man das alte Verhalten auf seinem Server will, kann man es mit diesem CVAR wieder aktivieren.',
      values: ON_OFF,
      default: 0
    },
    {
      name: 'sv_enablebunnyhopping',
      description: 'Wenn aktiviert, wird dem Server automatisch der Bunnyhopping Servertag hinzugefügt.',
      values: ON_OFF,
      default: 0
    },
    {
      name: 'mp_falldamage',
      description: 'Schaden beim Fallen',
      values: ON_OFF,
      default: 1
    }
  ],
  Statistik: [
    {
      name: 'sv_stats',
      description:
        'Anzeige vom CPU Verbrauch usw. funktioniert eh nicht richtig und frisst Leistung. Also besser deaktivieren.',
      values: ON_OFF,
      default: 0
    }
  ],
  'Team Balance': [
    {
      name: 'mp_forceautoteam',
      description: 'Spieler automatisch einem Team beim Connect zuordnen.',
      values: ON_OFF,
      default: 0
    },
    {
      name: 'mp_limitteams',
      description: 'Anzahl an Spielern, die ein Team mehr haben darf',
      default: 1,
      min: 0,
      max: 10,
      step: 1
    },
    {
      name: 'mp_autoteambalance',
      description: 'Teams automatisch balancieren.',
      values: [
        { key: 0, value: 'Aus' },
        { key: 1, value: 'Auto Switch' },
        { key: 2, value: 'Fragen' }
      ],
      default: 0
    },
    {
      name: 'mp_teams_unbalance_limit',
      description:
        'Teams gelten als unausgeglichen, wenn so viele Spieler mehr in einem Team sind. 0 um zu deaktivieren.',
      default: 0,
      min: 1,
      max: 32,
      step: 1
    }
  ],
  Logging: [
    {
      name: 'log',
      description: 'SERVER LOGGING, erstellt eine logfile (gebraucht für Statsprogramme wie HlstatsX).',
      values: [
        { key: 'off', value: 'Aus' },
        { key: 'on', value: 'An' }
      ],
      default: 'off'
    },
    {
      name: 'sv_log_onefile',
      description: 'Das Log in nur eine Datei schreiben',
      values: ON_OFF,
      default: 0
    },
    {
      name: 'sv_logfile',
      description: 'Logs im srcds/logs Verzeichnis speichern',
      values: ON_OFF,
      default: 1
    },
    {
      name: 'sv_logbans',
      description: 'Bans loggen',
      values: ON_OFF,
      default: 1
    },
    {
      name: 'mp_logdetail',
      description: 'Nachrichten aus der Konsole loggen',
      values: [0, 1, 2, 3],
      default: 0
    }
  ],
  Netzwerk: [
    {
      name: 'sv_minrate',
      description: 'Minimale Bandbreite; 0=unlimited',
      default: 15000,
      min: 1,
      max: 200000,
      step: 1
    },
    {
      name: 'sv_maxrate',
      description: 'Maximale Bandbreite; 0=unlimited',
      default: 100000,
      min: 1,
      max: 200000,
      step: 1
    },
    {
      name: 'sv_minupdaterate',
      description: 'Minimum Updates pro Sekunde zum Client. Für 100 TICK 45. Für 66 TICK 40. Für 33 TICK 15',
      default: 40,
      min: 1,
      max: 100,
      step: 1
    },
    {
      name: 'sv_maxupdaterate',
      description: 'Maximum Updates pro Sekunde zum Client. Für 100 TICK 100. Für 66 TICK 66. Für 33 TICK 33',
      default: 66,
      min: 1,
      max: 100,
      step: 1
    },
    {
      name: 'sv_mincmdrate',
      description: 'Minimum Updates vom Client pro Sekunde. Für 100 TICK 45. Für 66 TICK 40. Für 33 TICK 15',
      default: 40,
      min: 1,
      max: 200,
      step: 1
    },
    {
      name: 'sv_maxcmdrate',
      description: 'Maximum Updates vom Client pro Sekunde. Für 100 TICK 100. Für 66 TICK 66. Für 33 TICK 33',
      default: 66,
      min: 1,
      max: 200,
      step: 1
    },
    {
      name: 'sv_client_cmdrate_difference',
      description: 'Maximaler Unterschied zwischen cmd und updaterate',
      default: 30,
      min: 1,
      max: 200,
      step: 1
    },
    {
      name: 'sv_client_min_interp_ratio',
      description: 'Minimaler Wert von cl_interp_ratio.',
      values: [0, 1, 2],
      default: 0
    },
    {
      name: 'sv_client_max_interp_ratio',
      description: 'Maximaler Wert von cl_interp_ratio.',
      values: [0, 1, 2],
      default: 1
    }
  ],
  Gameplay: [
    {
      name: 'mapcyclefile',
      description: 'Datei, in der der Map Cycle steht.',
      default: 'mapcycle.txt'
    },
    {
      name: 'mp_flashlight',
      description: 'Taschenlampe erlauben.',
      values: ON_OFF,
      default: 1
    },
    {
      name: 'mp_forcecamera',
      description: 'Den Zuschauermodus für tote Spieler einschränken.',
      values: ON_OFF,
      default: 0
    },
    {
      name: 'mp_fadetoblack',
      description: 'Stirbt ein Spieler, wird sein Bildschirm immer schwärzer, bis er nichts mehr sieht.',
      values: ON_OFF,
      default: 0
    },
    {
      name: 'mp_allowspectators',
      description: 'Zuschauer erlauben',
      values: ON_OFF,
      default: 1
    }
  ],
  SourceTV: [
    {
      name: 'tv_enable',
      description: 'Source TV aktivieren. Es beeinträchtigt in den meisten Fällen stark die Serverperformance.',
      values: ON_OFF,
      default: 0
    },
    {
      name: 'tv_name',
      description: 'Name des SourceTV Servers.',
      default: 'SourceTV @ www.to-be-announced.de'
    },
    {
      name: 'tv_port',
      description: 'Der SourceTV Port.',
      default: 27020,
      min: 1,
      max: 65535,
      step: 1
    },
    {
      name: 'tv_maxrate',
      description:
        'Maximale Bandbreite eines TV Clients in Bytes/Sekunde 	  Je höher der Wert ist, desto mehr Bandbreite und CPU wird verbraucht.',
      default: 5000,
      min: 0,
      max: 200000,
      step: 1
    },
    {
      name: 'tv_password',
      description: 'Passwort für den SourceTV Server. Leer lassen, um es zu deaktivieren.',
      default: ''
    },
    {
      name: 'tv_maxclients',
      description: 'Maximale Anzahl von Zuschauern.',
      default: 20,
      min: 0,
      max: 10000,
      step: 1
    },
    {
      name: 'tv_title',
      description: 'Der Titel der &Uuml;bertragung, die dem Client gezeigt wird.',
      default: '',
      placeholder: 'SourceTV by www.to-be-announced.de'
    },
    {
      name: 'tv_nochat',
      description: 'Den Chat für die Zuschauer verbieten.',
      values: ON_OFF,
      default: 0
    },
    {
      name: 'tv_autorecord',
      description: 'Die Runden automatisch aufnehmen.',
      values: ON_OFF,
      default: 0
    },
    {
      name: 'tv_allow_camera_man',
      description: 'Ein Zuschauer kann Kameramann werden.',
      values: ON_OFF,
      default: 0
    },
    {
      name: 'tv_allow_static_shots',
      description: 'Der Autokameraman nutzt feste Punkte im Level für die Aufnahmen.',
      values: ON_OFF,
      default: 0
    },
    {
      name: 'tv_debug',
      description: 'SourceTV debuggen. Es werden wesentlich mehr Informationen, auch von Fehlern ausgegeben.',
      values: ON_OFF,
      default: 0
    },
    {
      name: 'tv_delaymapchange',
      description: 'Der Mapchange des Gameservers wird erst dann gemacht, wenn die &Uuml;bertragung abgeschlossen ist.',
      values: ON_OFF,
      default: 1
    },
    {
      name: 'tv_dispatchmode',
      description: 'Verweist die Clients auf Relay Proxis. 0 = nie, 1 = wenn angemessen, 2 = immer.',
      values: [
        { key: 0, value: 'nie' },
        { key: 1, value: 'wenn angemessen' },
        { key: 2, value: 'immer' }
      ],
      default: 0
    },
    {
      name: 'tv_relayvoice',
      description: 'Voice Kommunikation auch mit dem Relay versenden.',
      values: ON_OFF,
      default: 0
    },
    {
      name: 'tv_transmitall',
      description: 'Alle Entities mitsenden.',
      values: ON_OFF,
      default: 0
    },
    {
      name: 'tv_chatgroupsize',
      description: 'Die Größe der Chatgruppe setzen',
      default: 0,
      min: 0,
      max: 10000,
      step: 1
    },
    {
      name: 'tv_chattimelimit',
      description: 'Limitiert die Zuschauer nur alle X Sekunden zu chatten.',
      default: 8,
      min: 0,
      max: 120,
      step: 1
    },
    {
      name: 'tv_delay',
      description: 'Die &Uuml;bertragung um X Sekunden verzögern',
      default: 60,
      min: 0,
      max: 10000,
      step: 1
    },
    {
      name: 'tv_relaypassword',
      description: 'Passwort für Relay Proxis setzen.',
      default: ''
    },
    {
      name: 'tv_snapshotrate',
      description:
        'Anzahl von Weltbildberechnungen, die gesendet werden. Je höher der Wert, desto mehr CPU wird verbraucht.',
      default: 15,
      min: 0,
      max: 100,
      step: 1
    },
    {
      name: 'tv_timeout',
      description: 'Nach X Sekunden gibt es einen Timeout, wenn keine neuen Daten gesendet wurden.',
      default: 30,
      min: 0,
      max: 3600,
      step: 1
    }
  ],
  'Team Kills': [
    {
      name: 'mp_friendlyfire',
      description: 'Friendly Fire',
      values: ON_OFF,
      default: 1
    },
    {
      name: 'mp_tkpunish',
      description: 'Wenn mp_friendlyfire an ist, und jemand einen Team Kill begeht, wird er sofort vom Server getötet.',
      values: ON_OFF,
      default: 0
    }
  ],
  Sonstiges: [
    {
      name: 'sv_lan',
      description: 'Lan Modus deaktivieren. Für das Internet ist der Wert 0 zwingend erforderlich.',
      values: ON_OFF,
      default: 0
    },
    {
      name: 'sv_timeout',
      description: 'Nach so vielen Sekunden ohne Antwort wird der Spieler vom Server geschmissen',
      default: 65,
      min: 1,
      max: 3600,
      step: 1
    },
    {
      name: 'sv_pausable',
      description: 'Der Server kann pausiert werden.',
      values: ON_OFF,
      default: 0
    },
    {
      name: 'mp_autokick',
      description: 'Kicke Spieler die nur ideln oder teamkillen',
      values: ON_OFF,
      default: 0
    }
  ]
}
