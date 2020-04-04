import { expect } from 'chai'
import 'mocha'
import { smallestMultiple } from '../../src/problems/5-smallest-multiple/5-smallest-multiple'

const TEST_NUMBER = 2520
const TEST_LIST = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

describe('Smallest multiple provided test', () =>
{
    it('returns 2520 as the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder', () =>
    {
        expect(smallestMultiple(TEST_LIST)).eq(TEST_NUMBER)
    })
})