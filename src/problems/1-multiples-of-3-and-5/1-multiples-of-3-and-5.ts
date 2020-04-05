import { isMultipleOfThreeOrFive } from '../../helps/isMultipleOfThreeOrFive'
import { naturalNumbersUntil } from '../../helps/naturalNumbersUntil'

export const sumOfMultiples = (n: number) =>
    naturalNumbersUntil(n - 1)
        .reduce((a, v) => isMultipleOfThreeOrFive(v) ? a + v : a, 0)