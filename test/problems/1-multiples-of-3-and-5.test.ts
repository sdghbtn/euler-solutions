import { expect } from 'chai'
import 'mocha'
import { sumOfMultiples } from '../../src/problems/1-multiples-of-3-and-5/1-multiples-of-3-and-5'

describe('sumOfMultiples', () =>
{
    it('returns 23 as the sum of all natural numbers below 10 which are multiples of 3 or 5', () =>
    {
        expect(sumOfMultiples(10)).eq(23)
    })
})