import { expect } from 'chai'
import 'mocha'
import { isPalindrome } from '../../src/helps/isPalindrome'

describe('isPalindrome', () =>
{
    it('returns true for a given palindrome', () =>
    {
        expect(isPalindrome(9119)).true
        expect(isPalindrome(2002)).true
        expect(isPalindrome(1111)).true
        expect(isPalindrome(1001)).true
        expect(isPalindrome(456654)).true
        expect(isPalindrome(1234554321)).true
    })

    it('returns false for a given non-palindrome', () =>
    {
        expect(isPalindrome(9111)).false
        expect(isPalindrome(1234)).false
        expect(isPalindrome(123456789)).false
        expect(isPalindrome(98712345)).false
    })
})