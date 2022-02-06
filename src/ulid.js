import { getPRNG } from './get-prng.js'

import { encodeTime } from './encode-time.js'
import { encodeRandom } from './encode-random.js'

export const ulid = () => {
  const prng = getPRNG()
  return encodeTime() + encodeRandom(prng)
}
