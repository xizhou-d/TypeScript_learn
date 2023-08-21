// 对象类型写法一：
// let info: { name: string, age: number } = {
//     name: 'xizhou', 
//     age: 18
// }
// 写法二:
type Infotype = {
    name: string,
    age: number
}

let info: Infotype = {
    name: 'xizhou',
    age: 18
}

export {}