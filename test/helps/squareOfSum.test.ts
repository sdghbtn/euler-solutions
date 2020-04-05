import { expect } from 'chai'
import 'mocha'
import { squareOfSum } from '../../src/helps/squareOfSum'
import { naturalNumbersUntil } from '../../src/helps/naturalNumbersUntil'

describe('squareOfSum', () =>
{
    it('returns the square of the sum of a given array of numbers', () =>
    {
        expect(squareOfSum(naturalNumbersUntil(10))).eq(3025)
    })
})