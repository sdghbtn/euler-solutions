import { expect } from 'chai'
import 'mocha'
import { halveString } from '../../src/helps/halveString'

describe('halveString', () =>
{
    it('returns two halves of a given string with an even number of characters', () =>
    {
        expect(halveString('1234')).deep.equal(['12', '34'])
        expect(halveString('9119')).deep.equal(['91', '19'])
    })

    it('places remainder in second index when given a string with an odd number of characters', () =>
    {
        expect(halveString('12345')).deep.equal(['12', '345'])
        expect(halveString('123456789')).deep.equal(['1234', '56789'])
    })
})