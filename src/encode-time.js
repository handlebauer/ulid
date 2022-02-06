import { ENCODING, ENCODING_LEN, TIME_LEN } from './consants.js'

export const encodeTime = () => {
  let now = Date.now()
  let mod = undefined
  let str = ''
  for (let len = TIME_LEN; len > 0; len--) {
    mod = now % ENCODING_LEN
    str = ENCODING.charAt(mod) + str
    now = (now - mod) / ENCODING_LEN
  }
  return str
}
