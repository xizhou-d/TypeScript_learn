type IDType = number|string

// 判断 number 是否是 extendsIDType
type ResType = number extends IDType ? true : false




// 使用场景，举例：函数重载
function sum(arg1: number, arg2: number): number
function sum(arg1: string, arg2: string): string
function sum(arg1, arg2) {
    return arg1 + arg2
}




// 简单写法
function sum1<T>(arg1: T, arg2: T): T
function sum1(arg1, arg2) {
    return arg1 + arg2
}
sum1(10, 20)
// 这样写还可以传两个对象进去，并且 sum1 的参数和返回值变成了联合类型，类型不确定了，还是不行
sum1({}, {})




// 泛型加上限制
function sum2<T extends number|string>(arg1: T, arg2: T): T
function sum2(arg1, arg2) {
    return arg1 + arg2
}
sum(10, 20)
sum2(10, 'abc')
sum2({}, {})




// 以上写法 sum2 的参数和返回值变成 number|string 的联合类型了, 返回值类型加上条件
function sum3<T extends number | string>(arg1: T, arg2: T): T extends number ? number : string
function sum3(arg1, arg2) {
    return arg1 + arg2 
}
sum3(10, 20)


export {} 