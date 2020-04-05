import { expect } from 'chai'
import 'mocha'
import { largestPalindrome } from '../../src/problems/4-largest-palindrome-product/4-largest-palindrome-product'

describe('largestPalindrome', () =>
{
    it('returns the largest palindrome made from the product of two n-digit numbers, where n is a given number', () =>
    {
        expect(largestPalindrome(2)).eq(9009)
    })
})