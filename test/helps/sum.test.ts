import { expect } from 'chai'
import 'mocha'
import { sum } from '../../src/helps/sum'

describe('sum', () =>
{
    it('returns the sum of all elements in the given array of numbers', () =>
    {
        expect(sum([0, 1, 2, 3, 4, 5])).eq(15)
        expect(sum([10, 20, 30])).eq(60)
        expect(sum([1500, 4000])).eq(5500)
    })
})