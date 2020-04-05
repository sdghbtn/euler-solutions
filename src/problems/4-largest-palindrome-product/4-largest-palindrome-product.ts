import { isPalindrome } from '../../helps/isPalindrome'

export const largestPalindrome = (n: number) =>
{
    const low = n === 1 ? n : n * 10
    const high = parseInt('9'.repeat(n))
    let pal = 0

    for (let i = high; i >= low; i--)
    {
        for (let j = high; j >= low; j--)
        {
            let p = j * i
            if (isPalindrome(p) && p > pal) pal = p
        }
    }
    return pal
}