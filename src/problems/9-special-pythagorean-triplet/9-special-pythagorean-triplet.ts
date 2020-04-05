import { isPythagoreanTriplet } from '../../helps/isPythagoreanTriplet'
import { product } from '../../helps/product'

export const tripletProduct = (x: number) =>
{
    for (let i = 1; i <= x / 3; i++)
    {
        for (let j = i + 1; j <= x / 2; j++)
        {
            let triplet = [i, j, x - i - j]
            if (isPythagoreanTriplet(triplet)) return product(triplet)
        }
    }
    return 0
}