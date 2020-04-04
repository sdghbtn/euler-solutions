import { isMultipleOfThreeOrFive } from '../../helps/isMultipleOfThreeOrFive'
import { buildArray } from '../../helps/buildArray'

export const sumOfMultiples = (n: number) =>
    buildArray(n - 1)
        .reduce((a, v) => isMultipleOfThreeOrFive(v) ? a + v : a, 0)