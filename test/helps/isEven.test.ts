import { expect } from 'chai'
import 'mocha'
import { isEven } from '../../src/helps/isEven'

const EVEN_NUMBERS = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30]
const ODD_NUMBERS = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31]

describe('isEven', () =>
{
    it('should return true for even numbers', () =>
    {
        expect(EVEN_NUMBERS.every(isEven)).true
    })
    it('should return false for odd numbers', () =>
    {
        expect(ODD_NUMBERS.every(n => !isEven(n))).true
    })
})