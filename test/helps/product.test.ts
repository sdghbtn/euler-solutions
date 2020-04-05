import { expect } from 'chai'
import 'mocha'
import { product } from '../../src/helps/product'

describe('product', () =>
{
    it('returns the product of all elements in the given array of numbers', () =>
    {
        expect(product([0, 1, 2, 3, 4, 5])).eq(0)
        expect(product([1, 2, 3, 4, 5])).eq(120)
        expect(product([10, 20, 30])).eq(6000)
        expect(product([1500, 4000])).eq(6000000)
    })
})