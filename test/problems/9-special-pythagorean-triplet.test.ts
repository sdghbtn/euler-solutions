import { expect } from 'chai'
import 'mocha'
import { tripletProduct } from '../../src/problems/9-special-pythagorean-triplet/9-special-pythagorean-triplet'

describe('tripletProduct', () =>
{
    it('returns the product of a pythagorean triplet whose sum equals a given number', () =>
    {
        expect(tripletProduct(12)).eq(60)
    })

    it('returns 0 when no pythagorean triplets exist whose sum equals the given number', () =>
    {
        expect(tripletProduct(1)).eq(0)
        expect(tripletProduct(2)).eq(0)
    })
})