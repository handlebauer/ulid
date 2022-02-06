import { ENCODING, ENCODING_LEN, TIME_LEN } from './consants.js'

export const decodeTime = id =>
  id
    .substr(0, TIME_LEN)
    .split('')
    .reverse()
    .reduce(
      (acc, char, i) =>
        acc + ENCODING.indexOf(char) * Math.pow(ENCODING_LEN, i),
      0
    )
