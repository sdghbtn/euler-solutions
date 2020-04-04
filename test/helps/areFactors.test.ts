import { expect } from 'chai'
import 'mocha'
import { areFactors } from '../../src/helps/areFactors'

const areFactorsOfTwelve = areFactors(12)
const areFactorsOfThirteen = areFactors(13)
const areFactorsOfFifteen = areFactors(15)

describe('areFactors', () => {
    it('should return true when an array of numbers are factors of a given number', () => {
        expect(areFactorsOfTwelve([1, 12])).eq(true)
        expect(areFactorsOfTwelve([2, 6])).eq(true)
        expect(areFactorsOfTwelve([3, 4])).eq(true)

        expect(areFactorsOfThirteen([1, 13])).eq(true)

        expect(areFactorsOfFifteen([1, 15])).eq(true)
        expect(areFactorsOfFifteen([3, 5])).eq(true)
    })

    it('should return false when an array of numbers are not factors of a given number', () => {
        expect(areFactorsOfTwelve([1, 2])).eq(false)
        expect(areFactorsOfThirteen([1, 2])).eq(false)
        expect(areFactorsOfFifteen([1, 2])).eq(false)
    })
})