import { expect } from 'chai'
import 'mocha'
import { areConsecutive } from '../../src/helps/areConsecutive'

const singlyConsecutive = areConsecutive(1)
const doublyConsecutive = areConsecutive(2)

describe('areConsecutive', () =>
{
    it('returns true when all numbers in a given array are consecutive', () =>
    {
        expect(singlyConsecutive([0, 1, 2, 3])).true
        expect(singlyConsecutive([1, 2, 3, 4])).true
        expect(singlyConsecutive([5, 6, 7, 8])).true
        expect(singlyConsecutive([11, 12, 13, 14])).true
        expect(singlyConsecutive([17, 18, 19, 20])).true
        expect(singlyConsecutive([17, 18, 19, 20, 21, 22, 23, 24, 25])).true
        expect(singlyConsecutive([-4, -3, -2, -1, 0])).true

        expect(doublyConsecutive([0, 2, 4, 6])).true
        expect(doublyConsecutive([10, 12, 14, 16, 18, 20, 22])).true

        expect(areConsecutive(5)([0, 5, 10, 15])).true
        expect(areConsecutive(5)([50, 55, 60, 65, 70, 75, 80])).true
    })

    it('returns false when any numbers in a given array are not consecutive', () =>
    {
        expect(areConsecutive(1)([0])).false
        expect(singlyConsecutive([1, 3, 4, 5])).false
        expect(singlyConsecutive([16, 18, 19, 20])).false
        expect(singlyConsecutive([0, 9, 13, 20])).false
        expect(singlyConsecutive([0, 9, 13, 20, 21, 22, 23])).false
    })
})