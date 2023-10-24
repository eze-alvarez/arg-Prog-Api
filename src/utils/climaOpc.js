// 1, 2, 3 Principalmente despejado, parcialmente nublado y cubierto
// 45, 48 Niebla y depósito de niebla de escarcha
// 51, 53, 55 Llovizna: Intensidad ligera, moderada y densa
// 56, 57 Llovizna helada: Intensidad ligera y densa
// 61, 63, 65 Lluvia: Intensidad leve, moderada y fuerte
// 66, 67 Lluvia helada: Intensidad ligera y fuerte
// 71, 73, 75 Caída de nieve: Intensidad leve, moderada y fuerte
// 77 granos de nieve
// 80, 81, 82 Chubascos de lluvia: leves, moderados y violentos
// 85, 86 Chubascos de nieve ligeros e intensos
// 95 * Tormenta: Leve o moderada
// 96, 99 * Tormenta con granizo leve y fuerte
import soleado from '../picture/soleado.png'
import pocoNub from '../picture/pocoNublado.png'
import nublado from '../picture/nublado.png'
import niebla from '../picture/niebla.png'
import llovizna from '../picture/llovizna.png'
import lluviaHel from '../picture/lluviaHelada.png'
import nieve from '../picture/copos-de-nieve.png'
import trueno from '../picture/thunder.png'

export const climaOpc = {
  1: soleado,
  2: pocoNub,
  3: nublado,
  45: niebla,
  48: niebla,
  51: llovizna,
  53: llovizna,
  55: llovizna,
  56: lluviaHel,
  57: lluviaHel,
  61: llovizna,
  63: llovizna,
  65: llovizna,
  66: lluviaHel,
  67: lluviaHel,
  71: nieve,
  73: nieve,
  75: nieve,
  77: nieve,
  80: llovizna,
  81: llovizna,
  82: llovizna,
  85: lluviaHel,
  86: lluviaHel,
  95: trueno,
  96: trueno
}
