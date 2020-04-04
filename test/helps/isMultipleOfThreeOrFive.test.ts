import { expect } from 'chai'
import 'mocha'
import { isMultipleOfThreeOrFive } from '../../src/helps/isMultipleOfThreeOrFive'

describe('isMultipleOfThreeOrFive', () =>
{
    it('returns true when a given number is a multiple of 3 or 5', () =>
    {
        expect(isMultipleOfThreeOrFive(3)).eq(true)
        expect(isMultipleOfThreeOrFive(6)).eq(true)
        expect(isMultipleOfThreeOrFive(9)).eq(true)
        expect(isMultipleOfThreeOrFive(12)).eq(true)

        expect(isMultipleOfThreeOrFive(5)).eq(true)
        expect(isMultipleOfThreeOrFive(10)).eq(true)
        expect(isMultipleOfThreeOrFive(15)).eq(true)
        expect(isMultipleOfThreeOrFive(20)).eq(true)
    })

    it('returns false when a given number is not a multiple of 3 or 5', () =>
    {
        expect(isMultipleOfThreeOrFive(2)).eq(false)
        expect(isMultipleOfThreeOrFive(11)).eq(false)
        expect(isMultipleOfThreeOrFive(14)).eq(false)
    })
})