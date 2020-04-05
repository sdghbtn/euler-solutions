import { product } from '../../helps/product'

export const largestProduct = (x: number) => (y: string) => 
{
    let str: string = y
    let greatestProduct: number = 0
    while (str.length >= x)
    {
        const a = str.substr(0, x).split('').map(s => parseInt(s))
        if (product(a) > greatestProduct) greatestProduct = product(a)
        str = str.substr(1)
    }
    return greatestProduct
}