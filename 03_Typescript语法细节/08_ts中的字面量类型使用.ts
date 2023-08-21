/**
 * let 声明的变量如果没有指定类型，那么类型推断结果是 值的类型
 * const 声明的变量如果没有指定类型，那么类型推断结果就是 字面量类型
 */
// let name = 'hello world'
// const name1 = 'xizhou'




// 字面量类型
let name: 'xizhou' = 'xizhou'
const age: 18 = 18

type Direction1 = 'left'
// d1 只能给他赋值 'left'
const d1: Direction1 = 'left'




// 将多个字面量类型联合起来
type Direction2 = 'left' | 'right' | 'up' | 'down'
// d2 只能取值只能是 'left' | 'right' | 'up' | 'down' 其中一个
const d2: Direction2 = 'right'



// 例子：封装请求方法
type MethodType = 'get' | 'post'
function request(url: string, method: MethodType) {

}
request('http://xizhou.com/aaa', 'get')




// TS 细节
const info = {
    url: 'XxX',
    method: 'post'
}
// 这里会报错，因为 info.method 是 string 类型
// request(info.url, info.method)

// 解决方案一： info.method 进行类型断言
// request(info.url, info.method as 'post')

// 解决方案二： 直接让 info 对象类型是一个字面量类型
// type Info2Type = {
//     url: string
//     method: 'get' | 'post'
// }
// const info2: Info2Type = {
//     url: 'xxx',
//     method: 'post',
// }

const info2 = {
    url: 'xxx',
    method: 'post'
} as const
// as const 直接将 info2 对象中的属性类型全部变成了字面量类型，那么 info.url 为什么没报错，因为，字面量类型本身就是 string 类型
request(info2.url, info2.method)

export {}