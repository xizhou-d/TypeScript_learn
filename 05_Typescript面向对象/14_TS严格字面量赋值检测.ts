interface IPerson {
    name: string
    age: number
}

// 1. 奇怪的现象一：多了一个 height 会报错，如果采用赋值的方式就不会报错
const info: IPerson = {
    name: 'xizhou',
    age: 18,

    height: 198
}

const obj = {
    name: 'xizhou',
    age: 18,

    height: 198
}

const info1: IPerson = obj




// 2. 奇怪的现象二
function printPerson(p: IPerson) {

}

// 这样会报错
printPerson({ name: 'dongzhou', age: 11, height: 188})
// 先将传入对象赋值给一个变量，然后给函数传变量就不会报错
const info2 = { name: 'dongzhou', age: 11, height: 188}
printPerson(info2)




// 解释现象
// 对于第一次创建的对象字面量，称之为 fresh(新鲜的)
// 对于新鲜的对象字面量，会进行严格的类型检测，必须完全满足类型的要求（不能有多余的属性）
const obj2 = {
    name: 'kkk',
    age: 12,

    height: 188
}

// obj2 是新鲜的
// 赋值的时候已经不是新鲜的
const p: IPerson = obj2

export {}