// 1. 普通的实现
// function getLength(arg) {
//     return arg.length
// }

// 2. 函数的重载
// function getLength(arg: string): number
// function getLength(arg: any[]): number
// function getLength(arg: any): any {
//     return arg.length
// }

// 3. 联合类型实现(推荐)
// ❗️ 可以使用联合类型的情况下，尽量使用联合类型
function getLength(arg: string | any[]) {
    return arg.length
}

getLength('aaaaa')
getLength(['aaa', 'bbb', 'ccc'])

export {}