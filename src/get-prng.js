import crypto from 'crypto'

export const getPRNG = () => {
  if (typeof window !== 'undefined') {
    const crypto = window.crypto || window.msCrypto
    return () => {
      const buffer = new Uint8Array(1)
      crypto.getRandomValues(buffer)
      return buffer[0] / 255
    }
  }
  if (typeof crypto !== 'undefined') {
    return () => crypto.randomBytes(1).readUInt8() / 0xff
  }
  throw new Error('Failed to find a reliable PRNG')
}
