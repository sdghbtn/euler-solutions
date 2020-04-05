import { halveString } from './halveString'
import { reverseString } from './reverseString'

export const isPalindrome = (n: number) =>
{
    const halves: string[] = halveString(n.toString())
    return reverseString(halves.pop()) === halves.pop()
}