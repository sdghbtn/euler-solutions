export const largestPrimeFactor = (x: number) =>
{
    let c: number = x
    let primes: number[] = []

    while (c % 2 === 0) 
    {
        primes.push(2)
        c /= 2
    }

    for (let i = 3; i <= Math.sqrt(x); i += 2)
    {
        while (c % i === 0)
        {
            primes.push(i)
            c /= i
        }
    }

    c > 2 && primes.push(c)

    return Math.max(...primes)
}