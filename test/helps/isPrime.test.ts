import { expect } from 'chai'
import 'mocha'
import { isPrime } from '../../src/helps/isPrime'

const PRIMES = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199];

const NOT_PRIMES = [0, 1, 4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20, 21, 22, 24, 25, 26, 27, 28, 30, 32, 33, 34, 35, 36, 38, 39, 40, 42, 44, 45, 46, 48, 49, 50, 51, 52, 54, 55, 56, 57, 58, 60, 62, 63];

describe('isPrime', () =>
{
    it('should return true for prime numbers', () =>
    {
        expect(PRIMES.every(isPrime)).eq(true)
    })

    it('should return false for non-prime numbers', () =>
    {
        expect(NOT_PRIMES.every(n => !isPrime(n))).eq(true)
    })
})