export const testContents = (helpName: string) =>
`import { expect } from 'chai'
import 'mocha'
import { ${helpName} } from '../../src/helps/${helpName}'

describe('${helpName}', () =>
{
    it('', () =>
    {
        expect(${helpName}()).eq()
    })
})`