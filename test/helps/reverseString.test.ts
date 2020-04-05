import { expect } from 'chai'
import 'mocha'
import { reverseString } from '../../src/helps/reverseString'

describe('halveString', () =>
{
    it('returns a new string whose characters are in reverse order of a given string', () =>
    {
        expect(reverseString('1234')).eq('4321')
        expect(reverseString('9119')).eq('9119')
        expect(reverseString('123456789')).eq('987654321')
    })
})