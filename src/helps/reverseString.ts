export const reverseString = (s: string) => s.split('').reduceRight((a, v) => a + v)