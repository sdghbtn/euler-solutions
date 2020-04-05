import { readdir } from 'fs'
import { fork } from 'child_process'

readdir('./src/problems/', (e, d) => {
    if (e) throw e
    let problemName = d.filter(s => s.split('-')[0] === process.argv[2])
    if (problemName[0]) fork(`./src/problems/${problemName[0]}/${problemName[0]}.solve.ts`)
    else console.error('Solution not found for given problem number.\n')
})