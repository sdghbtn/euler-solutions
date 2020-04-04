import { sum } from '../../helps/sum'
import { isEven } from '../../helps/isEven'
import { fibonacciUntil } from '../../helps/fibonacciUntil'

export const sumOfEvenTerms = (n: number) => sum(fibonacciUntil(n).filter(isEven));