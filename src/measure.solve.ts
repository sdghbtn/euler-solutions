export const measure = (f: any) => (x: any) =>
{
    console.time('execution time')
    console.log('solution:', f(x))
    console.timeEnd('execution time')
    console.log('')
}