import { expect } from 'chai'
import 'mocha'
import { fibonacciUntil } from '../../src/helps/fibonacciUntil'

const TEST_LIMIT_NUMBER = 100
const TEST_FIBONACCI_SEQUENCE = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]

describe('fibonacciUntil', () =>
{
    it('returns a list of the numbers in the Fibonacci sequence whose values do not exceed the provided number', () =>
    {
        expect(fibonacciUntil(TEST_LIMIT_NUMBER)).deep.equal(TEST_FIBONACCI_SEQUENCE)
    })
})