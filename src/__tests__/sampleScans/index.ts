import { readFileSync } from 'fs'
import { resolve } from 'path'

const scanFile = (filename: string) => readFileSync(resolve(__dirname, `${filename}.txt`), { encoding: 'utf8' })

export const useCase1 = scanFile('useCase1')
export const useCase3 = scanFile('useCase3')
export const useCase4 = scanFile('useCase4')
export const valid = scanFile('valid')
export const invalid = scanFile('invalid')
export const illegible = scanFile('illegible')
