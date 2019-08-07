import { read } from './main'
import { useCase1, useCase3, illegible, invalid } from './__tests__/sampleScans'

const debug = require('debug')('ocr')

const run = () => {
  debug('Scanning use case 1')
  debug('  file contents:')
  debug(useCase1)
  debug('  result:')
  const r1 = read(useCase1)
  debug(r1)

  debug('Scanning use case 3')
  debug('  file contents:')
  debug(useCase3)
  debug('  result:')
  const r2 = read(useCase3)
  debug(r2)

  debug('Scanning sample file (contains illegible characters).')
  debug('  file contents:')
  debug(illegible)
  debug('  result:')
  const r3 = read(illegible)
  debug(r3)

  debug('Scanning sample file (contains invalid account numbers).')
  debug('  file contents:')
  debug(invalid)
  debug('  result:')
  const r4 = read(invalid)
  debug(r4)

  // TODO
  // debug('Scanning file 4 (contains mixed content)')
  // debug('  file contents:')
  // debug(scan2)
  // debug('  result:')
  // const r4 = read(scan2)
  // debug(r4)
}

run()
