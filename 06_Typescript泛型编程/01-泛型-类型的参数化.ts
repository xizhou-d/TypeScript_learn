// 1. 理解形参和实例参数化，但是参数的类型是固定的

function foo(name: string, age: number) {

}
foo('xizhou', 1)
foo('dongzhou', 2)

// 2. 定义函数：将传入的内容返回
function bar(arg: number) {
    return arg
}

/**
 * 1. 函数参数的类型，设置成 number string { name: string } 三种中的任意一种，剩下两种就会报错
 * 2. 设置成联合类型 number｜string｜{ name: string }，最后的返回值也是联合类型 number｜string｜{ name: string }，你不知道返回值的具体类型
 */
const res1 = bar(123)
const res2 = bar('aaaaa')
const res3 = bar({ name: 'xizhou' })

// 解决方法：将类型也当作一种类型
function bar1<Type>(arg: Type): Type {
    return arg 
}

// 完整写法
const res4 = bar1<number>(123)
const res5 = bar1<string>('aaaaa')
const res6 = bar1<{name: string}>({ name: 'xizhou' })
// 省略写法：TS 会自动进行类型推断，推导的类型更具体（跟 const/let 有关）
const res7 = bar1(123)
const res8 = bar1('aaaaa')
const res9 = bar1({ name: 'xizhou' })

export {}