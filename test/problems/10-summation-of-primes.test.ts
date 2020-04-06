import { expect } from 'chai'
import 'mocha'
import { sumOfPrimesBelow } from '../../src/problems/10-summation-of-primes/10-summation-of-primes'

describe('sumOfPrimesBelow', () =>
{
    it('returns the sum of all prime numbers below a given number', () =>
    {
        expect(sumOfPrimesBelow(10)).eq(17)
    })
})