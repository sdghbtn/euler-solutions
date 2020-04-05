import { expect } from 'chai'
import 'mocha'
import { isMultipleOfThreeOrFive } from '../../src/helps/isMultipleOfThreeOrFive'

describe('isMultipleOfThreeOrFive', () =>
{
    it('returns true when a given number is a multiple of 3 or 5', () =>
    {
        expect(isMultipleOfThreeOrFive(3)).true
        expect(isMultipleOfThreeOrFive(6)).true
        expect(isMultipleOfThreeOrFive(9)).true
        expect(isMultipleOfThreeOrFive(12)).true

        expect(isMultipleOfThreeOrFive(5)).true
        expect(isMultipleOfThreeOrFive(10)).true
        expect(isMultipleOfThreeOrFive(15)).true
        expect(isMultipleOfThreeOrFive(20)).true
    })

    it('returns false when a given number is not a multiple of 3 or 5', () =>
    {
        expect(isMultipleOfThreeOrFive(2)).false
        expect(isMultipleOfThreeOrFive(11)).false
        expect(isMultipleOfThreeOrFive(14)).false
    })
})