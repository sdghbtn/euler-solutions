import { expect } from 'chai'
import 'mocha'
import { isFactor } from '../../src/helps/isFactor'

describe('isFactor', () =>
{
    it('returns true if the second number given is a factor of the first', () =>
    {
        expect(isFactor(10)(1)).true
        expect(isFactor(198)(11)).true
        expect(isFactor(199)(199)).true
        expect(isFactor(200)(5)).true
        expect(isFactor(13195)(29)).true
    })
})