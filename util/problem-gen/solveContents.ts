export const solveContents = ([problemName, functionName]: string[]) =>
`import { measure } from '../../measure.solve'
import { ${functionName} } from './${problemName}'

measure(${functionName})()
`