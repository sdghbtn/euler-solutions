import { mkdir, writeFile } from 'fs'
import { testContents } from './testContents'
import { solveContents } from './solveContents'
import { problemContents } from './problemContents'
const problemName = process.argv[2]

writeFile(`./test/problems/${problemName}.test.ts`, testContents(process.argv.slice(2)), e => e && console.error(e))

mkdir(`./src/problems/${problemName}`, e =>
{
    if (e) throw e
    writeFile(`./src/problems/${problemName}/${problemName}.solve.ts`,
        solveContents(process.argv.slice(2)),
        e => e && console.error(e))
    writeFile(`./src/problems/${problemName}/${problemName}.ts`,
        problemContents(process.argv[3]),
        e => e && console.error(e))
})