import { writeFile } from 'fs'
import { testContents } from './testContents'
import { helpContents } from './helpContents'
const helpName = process.argv[2]

writeFile(`./test/helps/${helpName}.test.ts`,
    testContents(helpName),
    e => e && console.error(e))
writeFile(`./src/helps/${helpName}.ts`,
    helpContents(helpName),
    e => e && console.error(e))