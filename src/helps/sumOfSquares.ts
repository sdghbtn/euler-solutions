import { sum } from './sum'

export const sumOfSquares = (n: number[]) => sum(n.map(x => x * x))