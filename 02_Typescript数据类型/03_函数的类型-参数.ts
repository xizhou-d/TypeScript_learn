/**
 * 
 * 函数的参数没有明确的指定类型，那么推导出来的类型是 any
 * num1: any
 * num2: any
 * 
 * 
 * 在定义一个 typescript 函数时，都要明确的指定参数的类型, 因为，函数的参数没有明确的指定类型，那么推导出来的类型是 any
 * 返回值类型可以明确的指定，也可以自动进行类型推导
 */

function sum(num1: number, num2: number): number {
    return num1 + num2
}

const res = sum(1, 2)
// sum(123, 'aaa')

export {}