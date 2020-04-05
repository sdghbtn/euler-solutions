import { expect } from 'chai'
import 'mocha'
import { nthPrime } from '../../src/problems/7-10001st-prime/7-10001st-prime'

describe('nthPrime', () =>
{
    it('returns the nth prime number from a list of prime numbers which is n in length, where n is a given number', () =>
    {
        expect(nthPrime(6)).eq(13)
    })
})