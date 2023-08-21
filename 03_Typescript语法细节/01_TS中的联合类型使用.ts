// let foo: number | string = 'abc'

/**
 * 使用联合类型的时候要特别小心
 * 需要使用变量的方法的时候，需要使用类型缩小（就是判断一下类型）
 */
// foo = 123
// console.log(foo.length)
// if (typeof foo === 'string') {
//     console.log(foo.length)
// }

// 2. 举个例子：打印 ID
function printID(id: number | string) {
    console.log(id)

    if (typeof id === 'string') {
        console.log(id.length)
    } else {
        console.log(id)
    }
}
printID(123)
printID('123')
