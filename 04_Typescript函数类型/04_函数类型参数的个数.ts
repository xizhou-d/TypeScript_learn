// Typescript 对于传入的函数类型的参数个数不进行检测，多余的参数会被忽略掉
type ExecFnType = (num1: number, num2: number) => number
function calc(execFn: ExecFnType) {
    const num1 = 10
    const num2 = 20

    const res = execFn(num1, num2)
    console.log('res', res)
}

function foo(num1: number) {
    return 123
}

calc(foo)

export {}