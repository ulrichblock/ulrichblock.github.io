import { IConfig } from './config-types'

export const CLIENT_CSS: IConfig = {
  Grafik: [
    {
      name: 'cl_scoreboard_dead_color_red',
      description: 'Rotanteil der Hintergrundfarbe beim Scoreboard, wenn man tot ist.',
      default: 125,
      min: 0,
      max: 255,
      step: 1
    },
    {
      name: 'cl_scoreboard_dead_color_green',
      description: 'Grünanteil der Hintergrundfarbe beim Scoreboard, wenn man tot ist.',
      default: 125,
      min: 0,
      max: 255,
      step: 1
    },
    {
      name: 'cl_scoreboard_dead_color_blue',
      description: 'Blauanteil der Hintergrundfarbe beim Scoreboard, wenn man tot ist.',
      default: 125,
      min: 0,
      max: 255,
      step: 1
    },
    {
      name: 'cl_scoreboard_ct_color_red',
      description: 'Rotanteil der Hintergrundfarbe beim Scoreboard, wenn man CT ist.',
      default: 150,
      min: 0,
      max: 255,
      step: 1
    },
    {
      name: 'cl_scoreboard_ct_color_green',
      description: 'Grünanteil der Hintergrundfarbe beim Scoreboard, wenn man CT ist.',
      default: 200,
      min: 0,
      max: 255,
      step: 1
    },
    {
      name: 'cl_scoreboard_ct_color_blue',
      description: 'Blauanteil der Hintergrundfarbe beim Scoreboard, wenn man CT ist.',
      default: 255,
      min: 0,
      max: 255,
      step: 1
    },
    {
      name: 'cl_scoreboard_t_color_red',
      description: 'Rotanteil der Hintergrundfarbe beim Scoreboard, wenn man T ist.',
      default: 240,
      min: 0,
      max: 255,
      step: 1
    },
    {
      name: 'cl_scoreboard_t_color_green',
      description: 'Grünanteil der Hintergrundfarbe beim Scoreboard, wenn man T ist.',
      default: 90,
      min: 0,
      max: 255,
      step: 1
    },
    {
      name: 'cl_scoreboard_t_color_blue',
      description: 'Blauanteil der Hintergrundfarbe beim Scoreboard, wenn man T ist.',
      default: 90,
      min: 0,
      max: 255,
      step: 1
    }
  ],
  'Texturen und Oberflaechen': [],
  'Beleuchtung und Schatten': [],
  'Wasser Rendering': [],
  Models: [],
  'Objekte, Spraylogos, usw.': [],
  'Maus und Fadenkreuz': [],
  'Net Graph': [],
  'Net Settings': [],
  'Multicore Rendering': [],
  Sound: [],
  Sonstiges: []
}
