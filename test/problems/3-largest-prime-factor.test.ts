import { expect } from 'chai'
import 'mocha'
import { largestPrimeFactor } from '../../src/problems/3-largest-prime-factor/3-largest-prime-factor'

describe('largestPrimeFactor', () =>
{
    it('returns the largest prime factor of a given number', () =>
    {
        expect(largestPrimeFactor(198)).eq(11)
        expect(largestPrimeFactor(199)).eq(199)
        expect(largestPrimeFactor(200)).eq(5)
        expect(largestPrimeFactor(13195)).eq(29)
    })
})