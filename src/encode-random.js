import { ENCODING, ENCODING_LEN, RANDOM_LEN } from './consants.js'

const randomChar = prng => {
  let rand = Math.floor(prng() * ENCODING_LEN)
  return rand === ENCODING_LEN
    ? ENCODING.charAt(ENCODING_LEN - 1)
    : ENCODING.charAt(rand)
}

export const encodeRandom = prng => {
  let string = ''
  for (let len = RANDOM_LEN; len > 0; len--) {
    string = randomChar(prng) + string
  }
  return string
}
