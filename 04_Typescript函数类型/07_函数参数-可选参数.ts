// 可选参数的类型：显示指定的类型和 undefined 的联合类型   
// 例如下面的 num2: number | undefined
// 可选参数必须在 必传参数的后面
function foo(num1: number, num2?: number) {
    // num2 可能不存在，因此需要使用类型缩小
    if (num2 !== undefined) {
        console.log(num2 + 100)
    }
}

foo(10)

foo(10, 20)

export {}