import { readdir } from 'fs'
import { fork } from 'child_process'

readdir('./src/problems/', (e, d) => {
    if (e) throw e
    let problemName = d.filter(s => s.charAt(0) === process.argv[2])
    fork(`./src/problems/${problemName}/${problemName}.solve.ts`)
})