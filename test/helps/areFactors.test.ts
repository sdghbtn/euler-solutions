import { expect } from 'chai'
import 'mocha'
import { areFactors } from '../../src/helps/areFactors'

const areFactorsOfTwelve = areFactors(12)
const areFactorsOfThirteen = areFactors(13)
const areFactorsOfFifteen = areFactors(15)

describe('areFactors', () => {
    it('should return true when an array of numbers are factors of a given number', () => {
        expect(areFactorsOfTwelve([1, 12])).true
        expect(areFactorsOfTwelve([2, 6])).true
        expect(areFactorsOfTwelve([3, 4])).true

        expect(areFactorsOfThirteen([1, 13])).true

        expect(areFactorsOfFifteen([1, 15])).true
        expect(areFactorsOfFifteen([3, 5])).true
    })

    it('should return false when an array of numbers are not factors of a given number', () => {
        expect(areFactorsOfTwelve([1, 2])).false
        expect(areFactorsOfThirteen([1, 2])).false
        expect(areFactorsOfFifteen([1, 2])).false
    })
})