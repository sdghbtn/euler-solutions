import { expect } from 'chai'
import 'mocha'
import { sieveOfEratosthenes } from '../../src/helps/sieveOfEratosthenes'

describe('sieveofEratosthenes', () =>
{
    it('returns an array of prime numbers smaller than a provided number', () =>
    {
        expect(sieveOfEratosthenes(30)).deep.equal([2, 3, 5, 7, 11, 13, 17, 19, 23, 29])
        expect(sieveOfEratosthenes(100)).deep.equal([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97])
        expect(sieveOfEratosthenes(200)).deep.equal([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199])
    })
})