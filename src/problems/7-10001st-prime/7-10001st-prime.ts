import { isPrime } from '../../helps/isPrime'

export const nthPrime = (n: number) =>
{
    let primeCount: number = 0
    let prime: number
    let i: number = 2

    while (primeCount !== n)
    {
        if (isPrime(i))
        {
            primeCount++
            prime = i
        }
        i++
    }

    return prime
}