import { naturalNumbersUntil } from '../../helps/naturalNumbersUntil'
import { sumOfSquares } from '../../helps/sumOfSquares'
import { squareOfSum } from '../../helps/squareOfSum'

export const sumSquareDifference = (x: number) => squareOfSum(naturalNumbersUntil(x)) - sumOfSquares(naturalNumbersUntil(x))