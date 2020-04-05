export const testContents = ([problemName, functionName]: string[]) =>
`import { expect } from 'chai'
import 'mocha'
import { ${functionName} } from '../../src/problems/${problemName}/${problemName}'

describe('${functionName}', () =>
{
    it('', () =>
    {
        expect(${functionName}()).eq()
    })
})`