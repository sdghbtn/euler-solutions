import { takeLast } from './takeLast'
import { sum } from './sum'

const takeLastTwo = takeLast(2)

export const fibonacciUntil = (n: number) =>
{
    const fibSeq = [0, 1]

    while (sum(takeLastTwo(fibSeq)) < n)
        fibSeq.push(sum(takeLastTwo(fibSeq)))

    return fibSeq
};