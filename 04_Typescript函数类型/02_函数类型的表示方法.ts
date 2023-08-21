// 方案一、用函数类型表达式表示类型 function type expression
// 格式：(参数类型) => 返回值类型

type BarType = (number1: number) => number
const bar: BarType = (arg: number): number => {
    return 123
}

export {}