import { areMultiples } from '../../helps/areMultiples'

export const smallestMultiple = (a: number[]) =>
{
  let curNum = 1
  let foundNum = 0
  while (!foundNum)
  {
    if (areMultiples(a)(curNum)) foundNum = curNum
    curNum++
  }
  return foundNum
}