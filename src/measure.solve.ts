export const measure = (f: any) => (x: any) =>
{
    console.time()
    console.log('solution', f(x))
    console.timeEnd()
}