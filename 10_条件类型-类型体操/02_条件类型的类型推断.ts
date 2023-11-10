type CalcFnType = (num1: number, num2: number) => number 

function foo() {
    return 'abc'
}

// 获取函数的返回值类型
type CalcReturnType = ReturnType<CalcFnType>

type FooReturnType = ReturnType<typeof foo>


// ◼ 在条件类型中推断（Inferring Within Conditional Types）
//  条件类型提供了 infer 关键词，可以从正在比较的类型中推断类型，然后在 true 分支里引用该推断结果；


// 总结类型体操题目： MyReturnType
// 推断函数返回值类型
type MyReturnType<T extends (...arg: any[]) => any> = T extends (...arg: any) => infer R ? R : never

type CalcReturnType1 = MyReturnType<CalcFnType>

type FooReturnType1 = MyReturnType<typeof foo>

// 推断函数参数类型
type MyParameterType<T extends (...arg: any[]) => any> = T extends (...arg: infer A) => any ? A : never

type CalcReturnType2 = MyParameterType<CalcFnType>

type FooReturnType2 = MyParameterType<typeof foo>

export {}