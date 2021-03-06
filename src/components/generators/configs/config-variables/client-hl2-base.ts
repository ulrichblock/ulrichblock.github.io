import { IConfig, ON_OFF } from '../config-abstract'

export const CLIENT_HL2_BASE: IConfig = {
  Grafik: [
    {
      name: 'r_fastzreject',
      description: 'Optimierter Z-Buffer (Tiefenbuffer) Algorithmus',
      values: [-1, 0, 1],
      default: 1
    },
    {
      name: 'r_fastzrejectdisp',
      description: 'Optimierter Z-Buffer (Tiefenbuffer) Algorithmus bei Displacements.',
      values: [-1, 0, 1],
      default: 1
    },
    {
      name: 'cl_forcepreload',
      description: 'Vorausladen der Daten.',
      values: ON_OFF,
      default: 1
    },
    {
      name: 'r_3dsky',
      description: '3D Umgebungen der Maps (Häuser, Hügel etc.).',
      values: ON_OFF,
      default: 0
    },
    {
      name: 'r_ambientboost',
      description:
        'Ambiente Boost: Das Umgebungslicht verstärken, wenn es durch lokale Lichter wie Lampen stark überlagert wird.',
      values: ON_OFF,
      default: 0
    },
    {
      name: 'fps_max',
      description:
        'Maximal vom Client erreichbare FPS. Hier sollte man den Wert nehmen, den man minimal bei viel Aktion erreicht. Man sollte jedoch nicht unter den Wert 40 gehen.',
      default: 67,
      min: 33,
      max: 500,
      step: 1
    },
    {
      name: 'mat_forcemanagedtextureintohardware',
      description: 'Es wird erzwungen, dass bestimmte Texturen in den Ram geladen werden.',
      values: ON_OFF,
      default: 1
    },
    {
      name: 'mat_antialias',
      description:
        'Anti-Aliasing, oder auch Kantenglättung. Je höher der Wert desto glattere Kanten und CPU Verbrauch.',
      values: [
        {
          key: 0,
          value: 'Aus'
        },
        {
          key: 2,
          value: '2'
        },
        {
          key: 4,
          value: '4'
        },
        {
          key: 6,
          value: '6'
        }
      ],
      default: 0
    },
    {
      name: 'mat_forceaniso',
      description: 'Anisotropes Textur Filtern. Je höher der Wert desto schönere Texturen und höherer CPU Verbrauch.',
      values: [
        {
          key: 0,
          value: 'Bilinear'
        },
        {
          key: 2,
          value: '2x'
        },
        {
          key: 4,
          value: '4x'
        },
        {
          key: 8,
          value: '8x'
        },
        {
          key: 16,
          value: '16x'
        }
      ],
      default: 0
    },
    {
      name: 'mat_trilinear',
      description:
        'Wenn man trilliniares Textur Filtern anstelle an Stelle von anisotropen, oder bilinearen nutzen will.',
      values: ON_OFF,
      default: 0
    },
    {
      name: 'mat_hdr_enabled',
      description: 'High Dynamic Range aktieren.',
      values: ON_OFF,
      default: 1
    },
    {
      name: 'mat_hdr_level',
      description: 'High Dynamic Range Stufe.',
      values: [
        {
          key: 0,
          value: 'Keins'
        },
        {
          key: 1,
          value: 'Bloom'
        },
        {
          key: 2,
          value: 'Alles'
        }
      ],
      default: 0
    },
    {
      name: 'mat_picmip',
      description:
        'Textur Detail. Bei niedrig kann es vorkommen, dass manche Texturen rosa schwarz kariert angezeigt werden.',
      values: [
        {
          key: 0,
          value: 'Hoch'
        },
        {
          key: 1,
          value: 'Mittel'
        },
        {
          key: 2,
          value: 'Niedrig'
        }
      ],
      default: 2
    },
    {
      name: 'mat_reducefillrate',
      description: 'Shader Detail.',
      values: [
        {
          key: 0,
          value: 'Hoch'
        },
        {
          key: 1,
          value: 'Niedrig'
        }
      ],
      default: 1
    },
    {
      name: 'mat_vsync',
      description: 'Vsyncronisation (Vsync)',
      values: ON_OFF,
      default: 0
    }
  ],
  'Texturen und Oberflaechen': [
    {
      name: 'mat_bumpmap',
      description:
        'Bummapping. In der ESL darf man es nur deaktivieren, wenn auch die Specularmaps (mat_specular) deaktiviert wird.',
      values: ON_OFF,
      default: 0
    },
    {
      name: 'mat_specular',
      description: 'Specularmaps. Muss immer wie mat_bumbmap eingestellt sein.',
      values: ON_OFF,
      default: 0
    },
    {
      name: 'mat_fastspecular',
      description: 'Beschleunigtes Specularmapping.',
      values: ON_OFF,
      default: 1
    },
    {
      name: 'mat_parallaxmap',
      description: 'Paralaxmapping: Berechnet Feinheiten auf Texturen.',
      values: ON_OFF,
      default: 1
    },
    {
      name: 'r_renderoverlayfragment',
      description: 'Berechnung mehrerer Texturschichten sog. Overlays.',
      values: ON_OFF,
      default: 0
    },
    {
      name: 'r_decal_cullsize',
      description: 'Decals unterhalb dieser Grösse, in Pixeln, werden ausgeblendet.',
      default: 1,
      min: 1,
      max: 5000,
      step: 1
    },
    {
      name: 'r_drawflecks',
      description:
        'Deaktiviert die ganzen kleinen Staubpartikel und Körner, die bei Einschüssen aufgewirbelt werden. ACHTUNG: Schaltet man dies aus wirkt der Spielfluss deutlich langsamer!',
      values: ON_OFF,
      default: 1
    }
  ],
  'Beleuchtung und Schatten': [
    {
      name: 'r_shadows',
      description: 'Schatten aktivieren/deaktivieren',
      values: ON_OFF,
      default: 1
    },
    {
      name: 'r_shadowrendertotexture',
      description: 'Schatten Detail auf Texturen',
      values: [
        {
          key: 0,
          value: 'Niedrig'
        },
        {
          key: 1,
          value: 'Hoch'
        }
      ],
      default: 0
    },
    {
      name: 'mat_filterlightmaps',
      description: 'Filterung der Lightmaps.',
      values: ON_OFF,
      default: 1
    },
    {
      name: 'muzzleflash_light',
      description: 'Mündungsfeuer erhellt die Umgebung. Man sieht feuernde Gegner damit besser.',
      values: ON_OFF,
      default: 1
    },
    {
      name: 'r_dynamic',
      description: 'Dynamisches Licht in Maps.',
      values: ON_OFF,
      default: 0
    },
    {
      name: 'r_lightaverage',
      description: 'Eine Mittelwertbildung der Beleuchtung wird vorgenommen.',
      values: ON_OFF,
      default: 0
    },
    {
      name: 'r_PhysPropStaticLighting',
      description: 'Mapobjekte wie Kisten statisch beleuchten.',
      values: ON_OFF,
      default: 0
    },
    {
      name: 'r_occlusion',
      description:
        'Occlusions System. Entscheidet, welche Models berechnet werden und welche nicht. Auf den meisten Maps gibt es weniger FPS, wenn man es deaktiviert. Auf schlecht optimierten Custom Maps kann es ein zwei FPS bringen. Also besser aktiviert lassen.',
      values: ON_OFF,
      default: 0
    },
    {
      name: 'r_worldlightmin',
      description: 'Je höher der Wert, desto dunkler werden die Models. 0.0002 ist Standard.',
      default: 0.0002,
      min: 0,
      max: 255,
      step: 0.0001
    },
    {
      name: 'r_shadowmaxrendered',
      description: 'Maximale 3D Schattenwürfe gleichzeitig.',
      default: 2,
      min: 1,
      max: 255,
      step: 1
    }
  ],
  'Wasser Rendering': [
    {
      name: 'cl_show_splashes',
      description: 'Spritzer im Wasser',
      values: ON_OFF,
      default: 0
    },
    {
      name: 'r_waterdrawrefraction',
      description: 'Durchsichtiges Wasser. Stellt man es aus, wird das Wasser schwarz.',
      values: ON_OFF,
      default: 1
    },
    {
      name: 'r_waterdrawreflection',
      description: 'Spiegelung der Map auf dem Wasser.',
      values: ON_OFF,
      default: 0
    },
    {
      name: 'r_waterforceexpensive',
      description: 'Art der Spiegelung im Wasser.',
      values: [
        {
          key: 0,
          value: 'Einfache'
        },
        {
          key: 1,
          value: 'Alles'
        }
      ],
      default: 0
    },
    {
      name: 'r_waterforcereflectentities',
      description: 'Was zu spiegeln ist.',
      values: [
        {
          key: 0,
          value: 'Welt'
        },
        {
          key: 1,
          value: 'Andere'
        }
      ],
      default: 0
    },
    {
      name: 'r_forcewaterleaf',
      description: 'Optimiert die Berechnung, wenn der Spieler im Wasser ist.',
      values: ON_OFF,
      default: 1
    },
    {
      name: 'r_cheapwaterend',
      description: 'Ende der schlechten Wasserqualität.',
      default: 0.1,
      min: 0,
      max: 1,
      step: 0.1
    },
    {
      name: 'r_cheapwaterstart',
      description: 'Beginn der schlechten Wasserqualität.',
      default: 0,
      min: 0,
      max: 1,
      step: 0.1
    },
    {
      name: 'mat_clipz',
      description: 'Schlechtere Wasserqualität',
      values: ON_OFF,
      default: 0
    },
    {
      name: 'mat_wateroverlaysize',
      description: 'Klarheit der Spiegelungen. Muss ein Vielfaches von 8 sein.',
      default: 8,
      min: 8,
      max: 80,
      step: 8
    }
  ],
  Models: [
    {
      name: 'cl_ragdoll_physics_enable',
      description: 'Bei 0 werden die Leichen sofort ausgeblendet/Keine Berechnung der Umher(f)liegenden Leichen.',
      values: ON_OFF,
      default: 1
    },
    {
      name: 'cl_ragdoll_collide',
      description: 'Bei 0 fallen die Leichen ineinander - Bei 1 liegen die Leichen übereinander.',
      values: ON_OFF,
      default: 0
    },
    {
      name: 'ragdoll_sleepaftertime',
      description: 'Nach X Sekunden umfallen und zappeln bleiben die Leichen starr liegen.',
      default: 3.5,
      min: 8,
      max: 80,
      step: 0.1
    },
    {
      name: 'r_lod',
      description: 'Detailstufe der Models (Spieler, Autos, Waggons etc.)',
      values: [
        {
          key: 0,
          value: 'Hoch'
        },
        {
          key: 1,
          value: 'Mittel'
        },
        {
          key: 2,
          value: 'Niedrig'
        }
      ],
      default: 2
    },
    {
      name: 'r_rootlod',
      description: 'Ebenso wie r_lod: Model Details',
      values: [
        {
          key: 0,
          value: 'Hoch'
        },
        {
          key: 1,
          value: 'Mittel'
        },
        {
          key: 2,
          value: 'Niedrig'
        }
      ],
      default: 2
    },
    {
      name: 'r_teeth',
      description: 'Zähne der Models anzeigen',
      values: ON_OFF,
      default: 0
    },
    {
      name: 'r_eyes',
      description: 'Augen der Models anzeigen',
      values: ON_OFF,
      default: 0
    },
    {
      name: 'r_flex',
      description: 'Animationen der Gesichert',
      values: ON_OFF,
      default: 0
    }
  ],
  'Objekte, Spraylogos, usw.': [
    {
      name: 'mp_decals',
      description: 'Anzahl der Decals wie Einschusslöcher, Spraylogos u.s.w.',
      default: 1,
      min: 1,
      max: 1000,
      step: 1
    },
    {
      name: 'r_decals',
      description: 'Das Selbe wie mp_decals',
      default: 1,
      min: 1,
      max: 1000,
      step: 1
    },
    {
      name: 'r_drawbatchdecals',
      description: 'Anzahl von übereinanderliegenden Decals',
      default: 1,
      min: 1,
      max: 1000,
      step: 1
    },
    {
      name: 'r_spray_lifetime',
      description: 'Gibt an ueber wieviele Runden ein Spraylogo angezeigt wird.',
      default: 1,
      min: 1,
      max: 30,
      step: 1
    },
    {
      name: 'r_drawmodeldecals',
      description: 'Blutspritzer auf Playermodels.',
      values: ON_OFF,
      default: 0
    },
    {
      name: 'r_maxmodeldecal',
      description: '',
      default: 50,
      min: 1,
      max: 1000,
      step: 1
    },
    {
      name: 'cl_drawmonitors',
      description: 'Anzeige von Monitoren mit 3D Inhalt der Welt.',
      values: ON_OFF,
      default: 0
    },
    {
      name: 'rope_rendersolid',
      description: 'Seile, Kabel und Stromleitungen anzeigen.',
      values: ON_OFF,
      default: 0
    },
    {
      name: 'rope_shake',
      description: 'Stärke des Schwingens von Kabeln und Seilen.',
      default: 0,
      min: 1,
      max: 100,
      step: 1
    },
    {
      name: 'rope_smooth',
      description: 'Weichzeichnen von Kabeln und Seilen.',
      values: ON_OFF,
      default: 0
    },
    {
      name: 'rope_smooth_enlarge',
      description: 'Vergrösserung von Seilen usw. bei Antialasing.',
      default: 0,
      min: 1,
      max: 100,
      step: 0.1
    },
    {
      name: 'rope_subdiv',
      description: 'Maximale Anzahl der Einzelteile bei Seilen usw..',
      default: 1,
      min: 1,
      max: 100,
      step: 1
    },
    {
      name: 'rope_collide',
      description: 'Kollidieren von Kabeln und Seilen mit Gegenstaenden',
      values: ON_OFF,
      default: 0
    },
    {
      name: 'rope_wind_dist',
      description: 'Stärke des Schwingens von Kabeln und Seilen im Wind',
      default: 0,
      min: 1,
      max: 100,
      step: 0.1
    },
    {
      name: 'rope_averagelight',
      description: 'Beleuchtung von Seilen usw.',
      values: ON_OFF,
      default: 0
    },
    {
      name: 'cl_phys_props_max',
      description: 'Maximale mögliche physikalische Models',
      default: 0,
      min: 1,
      max: 5000,
      step: 1
    },
    {
      name: 'props_break_max_pieces',
      description: 'Maximale Anzahl von Teilen, nachdem ein Fass usw. zerschossen wurde.',
      default: 0,
      min: 1,
      max: 5000,
      step: 1
    },
    {
      name: 'props_break_max_pieces_perframe',
      description: 'Maximale Anzahl von Teilen, nachdem ein Fass usw. zerschossen wurde je Frame.',
      default: 0,
      min: 1,
      max: 5000,
      step: 1
    },
    {
      name: 'func_break_max_pieces',
      description: "Das Gleiche nochmal für 'func' Objekte.",
      default: 0,
      min: 1,
      max: 5000,
      step: 1
    }
  ],
  'Net Graph': [
    {
      name: 'net_graph',
      description:
        'Den net_graph aktivieren. Hiermit kann man den Datendurchsatz, Server Fps usw. betrachten. Kostet FPS, also besser aus.',
      values: [
        {
          key: 0,
          value: 'Aus'
        },
        {
          key: 1,
          value: 'An'
        },
        {
          key: 1,
          value: '2'
        },
        {
          key: 1,
          value: '3'
        },
        {
          key: 1,
          value: '4'
        }
      ],
      default: 0
    },
    {
      name: 'net_graphpos',
      description: 'Position des Netgraphen.',
      values: [
        {
          key: 1,
          value: 'Links'
        },
        {
          key: 2,
          value: 'Mitte'
        },
        {
          key: 3,
          value: 'Rechts'
        }
      ],
      default: 2
    },
    {
      name: 'net_graphheight',
      description: 'Höhe des Net_graphen in Pixeln.',
      default: 64,
      min: 0,
      max: 1000,
      step: 1
    }
  ],
  'Net Settings': [
    {
      name: 'rate',
      description:
        'Maximal benutzbare Bandbreite. Je Mehr Spieler auf dem Server sind, desto mehr wird gebraucht. Das Gleiche gilt auh für die Tickrate des Servers.',
      default: 25000,
      min: 1000,
      max: 1000000,
      step: 1000
    },
    {
      name: 'cl_cmdrate',
      description:
        'Anzahl in der Sekunde, in der Daten von dir zum Server gesendet werden. Kann nicht grösser als die erreichten FPS sein.',
      default: 66,
      min: 33,
      max: 1000,
      step: 1
    },
    {
      name: 'cl_updaterate',
      description:
        'Anzahl in der Sekunde, in der Daten vom Server zu dir gesendet werden. Man sollte aufpassen, dass hier keine zu grosse Abweichung zu cl_cmdrate entsteht.',
      default: 66,
      min: 33,
      max: 1000,
      step: 1
    },
    {
      name: 'cl_interp',
      description:
        'So viele (0.01=10ms) werden die Hitboxes nach hinten versetzt, um den Ping auszugleichen. Bei einem hohen Ping sollte man einen höheren Wert nehmen. Als Startwert kann man den durchschnittlichen Scoreboard Ping nehmen. Danach so weit herabsetzen, bis man merkt, das dieHitboxen nicht mehr passen.',
      default: 0.01,
      min: 0,
      max: 10,
      step: 0.01
    },
    {
      name: 'cl_interp_ratio',
      description:
        'Bei einem Wert grösser als 0 wird der minimal mögliche cl_interp Wert so berechnet:\ncl_interp (minimal) =cl_interp_ratio / cl_updaterate.',
      default: 1,
      min: 0,
      max: 10,
      step: 0.01
    },
    {
      name: 'cl_interp_all',
      description: 'Bei 0 werden nur Spieler und Objekte, bei 1 die ganze Spielwelt interpoliert.',
      values: ON_OFF,
      default: 1
    },
    {
      name: 'cl_resend',
      description: 'Dauer in Sekunden, bevor der Client auf den Server connected, bzw. reconnected.',
      default: 1,
      min: 1,
      max: 120,
      step: 1
    },
    {
      name: 'cl_timeout',
      description: 'Nach so vielen Sekunden ohne Nachricht vom Server werdet ihr disconnected.',
      default: 60,
      min: 1,
      max: 1200,
      step: 1
    },
    {
      name: 'cl_smooth',
      description: 'Sanfte Fehlerkorrektur bei Vorraussagefehlern in der Gegnerberechnung.',
      values: ON_OFF,
      default: 1
    },
    {
      name: 'cl_smoothtime',
      description:
        'So lange, Angabe in Sekunden, wird ein Voraussagefehler (Client Prediction) sanft berichtigt, nachdem er die Voraussage berechnet wurde.',
      default: 0.1,
      min: 0.1,
      max: 10,
      step: 0.1
    },
    {
      name: 'cl_lagcomp_errorcheck',
      description: 'Fehler in der Gegnerposition werden gesucht und gegebenenfalls behoben.',
      values: ON_OFF,
      default: 1
    },
    {
      name: 'cl_interp_npcs',
      description: 'Bots interpolieren.',
      values: ON_OFF,
      default: 1
    }
  ],
  'Multicore Rendering': [
    {
      name: 'cl_interp_threadmodeticks',
      description: 'Zusätzliche Interpolationscyclen, wenn Multicore Rendering aktiv ist.',
      values: ON_OFF,
      default: 1
    },
    {
      name: 'cl_threaded_bone_setup',
      description: 'Die paralelle Berechnung von C_BaseAnimating::SetupBones() aktivieren.',
      values: ON_OFF,
      default: 0
    },
    {
      name: 'cl_threaded_client_leaf_system',
      description:
        'Jede Maps ist in leafs (Berechnungsabschnitte) aufgeteilt. Mit diesem Befehl kann man sie auf mehren CPU Kernen verteilt berechnen.',
      values: ON_OFF,
      default: 0
    },
    {
      name: 'host_thread_mode',
      description: 'Multicore Rendering aktivieren. Das sicherste ist es, die Autoerkennung, also 1 zu nutzen.',
      values: [
        {
          key: 0,
          value: 'Aus'
        },
        {
          key: 1,
          value: 'Auto Erkennung'
        },
        {
          key: 2,
          value: 'An'
        }
      ],
      default: 1
    },
    {
      name: 'mat_queue_mode',
      description:
        'Der Queue/Thread den das Material System benutzen soll. Wenn man Multicore komplett abschalten will nimmt man hier 0. Will man es aktivieren nimmt man -1. Alle anderen Werte führen bei mir zu Rucklern und Abstürzen.',
      values: [
        {
          key: -2,
          value: 'legacy default'
        },
        {
          key: -1,
          value: 'default'
        },
        {
          key: 0,
          value: 'synchronous single thread'
        },
        {
          key: 1,
          value: 'queued single thread'
        }
      ],
      default: -1
    },
    {
      name: 'r_queued_decals',
      description: 'Ein Teil des Decal Rendering wird vom Material System Bearbeitungs-Thread berechnet.',
      values: ON_OFF,
      default: 0
    },
    {
      name: 'r_queued_post_processing',
      description: 'Beeinflusst die Nachberechnung. Ein andere Wert als 0 fürt zur Unstabilität',
      values: ON_OFF,
      default: 0
    },
    {
      name: 'r_queued_ropes',
      description: 'Das Gleiche für die Berechnung von Seilen. Andere Werte als 0 führen zur Unstabilität',
      values: ON_OFF,
      default: 0
    },
    {
      name: 'r_threaded_renderables',
      description: 'Paralleles Berechnen von Oberflächen.',
      values: ON_OFF,
      default: 0
    },
    {
      name: 'r_threaded_particle',
      description: 'Paralleles Berechnen von Partikeln.',
      values: ON_OFF,
      default: 0
    },
    {
      name: 'r_threaded_client_shadow_manage',
      description: 'Paralleles Berechnen von Schatten',
      values: ON_OFF,
      default: 0
    }
  ],
  'Maus und Fadenkreuz': [
    {
      name: 'cl_dynamic_crosshair',
      description: 'Dynamisches Fadenkreuz. Wesentlich besser zu treffen, wenn es deaktiviert ist.',
      values: ON_OFF,
      default: 0
    }
  ],
  Sound: [
    {
      name: 'r_ambientboost',
      description: 'Ambiente Boost: Umgebungsgeräusche werden verstärkt.',
      values: ON_OFF,
      default: 0
    }
  ],
  Sonstiges: [
    {
      name: 'cl_showfps',
      description: 'Die FPS anzeigen lassen. Kostet etwas FPS also aus.',
      values: ON_OFF,
      default: 0
    },
    {
      name: 'spec_scoreboard',
      description: 'Automatische Einblendung des Scoreboards im Zuschauermodus.',
      values: ON_OFF,
      default: 0
    },
    {
      name: 'hud_saytext_time',
      description: 'Bestimmt die Zeit in Sekunden, die Text/Chatnachrichten zu sehen sind.',
      default: 3,
      min: 0,
      max: 120,
      step: 1
    },
    {
      name: 'cl_showpluginmessages',
      description: 'Schaltet die vom Serverplugins erzeugten Nachrichten aus.',
      values: ON_OFF,
      default: 0
    },
    {
      name: 'cl_allowupload',
      description: 'Upload des eigenen Spraylogos, beim connecten.',
      values: ON_OFF,
      default: 0
    },
    {
      name: 'cl_allowdownload',
      description: 'Download von Spraylogos der Mitspieler beim connecten.',
      values: ON_OFF,
      default: 0
    },
    {
      name: 'cl_downloadfilter',
      description:
        'all erlaubt den Download aller Dateien (Maps, Sounds usw.) Standardeinstellung. nosounds blockt nur den Download von Sounddateien (.mp3 .wav). none blockt jeglichen Download von Servern.',
      values: ['all', 'nosounds', 'none'],
      default: 'all'
    },
    {
      name: 'cl_cloud_settings',
      description:
        'Abgleich mit der Steam Cloud. Wenn aktiviert, werden eure Settings im Internet und nicht bei euch gespeichert.',
      values: ON_OFF,
      default: 1
    }
  ]
}
