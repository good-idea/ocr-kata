import { readFileSync } from 'fs'
import { resolve } from 'path'

const scanFile = (filename: string) => readFileSync(resolve(__dirname, `${filename}.txt`), { encoding: 'utf8' })

export const scan1 = scanFile('scan1')
export const valid = scanFile('valid')
export const invalid = scanFile('invalid')
export const illegible = scanFile('illegible')
