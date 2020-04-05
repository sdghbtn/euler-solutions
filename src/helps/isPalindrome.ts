import { reverseString } from './reverseString'

export const isPalindrome = (n: number) => reverseString(n.toString()) === n.toString()