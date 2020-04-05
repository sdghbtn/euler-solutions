import { expect } from 'chai'
import 'mocha'
import { isPythagoreanTriplet } from '../../src/helps/isPythagoreanTriplet'

describe('isPythagoreanTriplet', () =>
{
    it('', () =>
    {
        expect(isPythagoreanTriplet([3, 4, 5])).true
        expect(isPythagoreanTriplet([5, 12, 13])).true
        expect(isPythagoreanTriplet([8, 15, 17])).true
        expect(isPythagoreanTriplet([7, 24, 25])).true
        expect(isPythagoreanTriplet([20, 21, 29])).true
        expect(isPythagoreanTriplet([12, 35, 37])).true
        expect(isPythagoreanTriplet([9, 40, 41])).true
        expect(isPythagoreanTriplet([28, 45, 53])).true
    })
})