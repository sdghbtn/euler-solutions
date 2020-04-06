import { sum } from '../../helps/sum'
import { sieveOfEratosthenes } from '../../helps/sieveOfEratosthenes'

export const sumOfPrimesBelow = (x: number) => sum(sieveOfEratosthenes(x))