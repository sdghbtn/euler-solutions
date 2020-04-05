export const sieveOfEratosthenes = (x: number) =>
{
    const isPrime = new Array(x + 1).fill(true)
    isPrime[0] = false
    isPrime[1] = false

    const primes = []

    for (let i = 2; i <= x; i++)
    {
        if (isPrime[i] === true)
        {
            primes.push(i)

            let n = 2 * i
            while (n <= x)
            {
                isPrime[n] = false
                n += i
            }
        }
    }

    return primes
}