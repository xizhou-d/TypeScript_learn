
type ExecFnType = (num1: number, num2: number) => number

function calc(execfn: ExecFnType) {
    const num1 = 10
    const num2 = 20

    const res = execfn(num1, num2)

    return res
}

function sum(num1: number, num2: number) {
    return num1 + num2
}

function foo(num1: number) {
    return 123
}

calc(sum)
calc(foo)

export {}