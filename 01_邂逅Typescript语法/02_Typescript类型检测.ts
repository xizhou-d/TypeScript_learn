// function getLength(args: string | number[]) {
//     return args.length
// }

// console.log(getLength('aaaa'))
// console.log(getLength([1, 2, 3, 4]))

// console.log(getLength(123))
// console.log(getLength())

function getLength(args: { length: number }) {
    return args.length
}

const info = {
    length: 12
}
console.log(getLength(info))

// typescript 每个文件都是一个独立的模块，不加模块代表是全局的，但是 01_javascript类型缺失.js 文件中已经有了一个 getLength 函数，
// 所以会报错： Duplicate function implementation.（重复函数实现）

export {}