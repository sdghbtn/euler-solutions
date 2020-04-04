import { expect } from 'chai'
import 'mocha'
import { takeLast } from '../../src/helps/takeLast'

const TEST_NUMBER = 2
const TEST_LIST = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89]

describe('takeLast', () =>
{
    it('returns the last n elements from a given array', () =>
    {
        expect(takeLast(TEST_NUMBER)(TEST_LIST)).deep.equal([55, 89])
    })
})