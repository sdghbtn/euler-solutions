import { expect } from 'chai'
import 'mocha'
import { buildArray } from '../../src/helps/buildArray'

describe('buildArray', () =>
{
    it('should build a 1-indexed consecutive integer array which is the length of a provided number', () =>
    {
        expect(buildArray(10)).deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

        expect(buildArray(20)).deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])
    })
})