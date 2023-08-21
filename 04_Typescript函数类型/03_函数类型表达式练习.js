function calc(execFn) {
    const num1 = 10
    const num2 = 20

    const res = execFn(num1, num2)
    return res
}

function sum(num1, num2) {
    return num1 + num2
}

function mul(num1, num2) {
    return num1 * num2
}

calc(sum)
calc(mul)