import { expect } from 'chai'
import 'mocha'
import { areMultiples } from '../../src/helps/areMultiples'

const TEST_NUMBER = 2520
const TEST_LIST = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

describe('areMultiples', () =>
{
    it('should return true when all numbers in a given array are multiples of a given number', () =>
    {
        expect(areMultiples(TEST_LIST)(TEST_NUMBER)).eq(true)
    })
})