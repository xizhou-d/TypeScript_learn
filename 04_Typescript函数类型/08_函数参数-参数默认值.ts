// 函数的参数可以有默认值
// 1. 有默认值的情况下，参数注解可以省略
// 2. 有默认值的参数是可以接收一个 undefined 

function foo(num1: number, num2: number = 100) {

}

foo(10)
foo(10, 20)
foo(10, undefined)

export {}