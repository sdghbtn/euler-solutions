import { expect } from 'chai'
import 'mocha'
import { sumSquareDifference } from '../../src/problems/6-sum-square-difference/6-sum-square-difference'

describe('sumSquareDifference', () =>
{
    it('returns the difference between the sum of the squares of the first n natural numbers and the square of the sum, where n is a given number', () =>
    {
        expect(sumSquareDifference(10)).eq(2640)
    })
})