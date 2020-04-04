import { expect } from 'chai'
import 'mocha'
import { sumOfEvenTerms } from '../../src/problems/2-even-fibbonacci-numbers/2-even-fibbonacci-numbers'

describe('sumOfEvenTerms', () =>
{
    it('returns the sum of all even terms in the Fibonacci sequence up to but not exceeding the given number', () =>
    {
        expect(sumOfEvenTerms(100)).eq(44)
        expect(sumOfEvenTerms(400000)).eq(257114)
    })
})