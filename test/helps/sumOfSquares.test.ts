import { expect } from 'chai'
import 'mocha'
import { sumOfSquares } from '../../src/helps/sumOfSquares'
import { naturalNumbersUntil } from '../../src/helps/naturalNumbersUntil'

describe('sumOfSquares', () =>
{
    it('returns the sum of the squares a given array of numbers', () =>
    {
        expect(sumOfSquares(naturalNumbersUntil(10))).eq(385)
    })
})