interface IIndexType {
    // yyy: 返回值类型的目的是告知通过索引去获取到的值是什么类型
    // index: 索引的类型只能是 number 或者是 string 类型其中一个
    // [index: number]: string
    // [index: string]: any
    [index: string]: string
}
// 索引签名： [index: number]: string
const names: IIndexType = ['abc', 'cba', 'nba']

// 索引签名：[index: string]: any 没有报错
// 解释：
// 1. 索引要求必须是字符串类型  names[0] => names['0']
//     javascript中国呢 names[0] 本质上是 names['0]
const names1: IIndexType = ['abc', 'cba', 'nba']


// 索引签名：[index: string]: string  会报错
// 原因：严格字面量赋值检测
// names["forEach"] => function
// names["filter/map"] => function
// names有的属性返回的是 函数类型，并不是 string 类型，所以报错了
const names2: IIndexType = ['abc', 'cba', 'nba']


export {}