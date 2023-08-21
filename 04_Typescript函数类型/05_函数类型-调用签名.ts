// 1. 函数类型表达式
type BarType = (num1: number) => number
const bar: BarType = (num1: number): number => {
    return 123
}

// 2. 函数的调用签名（从对象的角度来看待这个函数，也可以有其他属性）
// ❗️ 用调用签名表达函数类型的时候用的是 冒号；用函数类型表达式用的是 等号
interface IFoo {
    name: string
    age: number
    // 函数可以调用：调用签名 
    // (参数列表): 返回值类型
    (num1: number): number
}
const foo: IFoo = (num1: number): number => {
    return 123
}

foo.name = 'xizhou'
foo.age = 18
foo(888)


// 开发中这两种方式如何选择？
// 1. 如果只是描述函数类型本身（函数可以被调用），使用函数类型表达式
// 2. 如果在描述函数作为对象可以被调用，同时也有其他属性时，使用函数调用签名


export {}