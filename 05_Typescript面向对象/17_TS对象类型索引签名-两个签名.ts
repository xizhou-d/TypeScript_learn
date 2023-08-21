interface IIndexType {
    // 两个索引类型的写法
    // [index: number]: string
    // [key: string]: any


    // 要求一：
    // 下面的写法不允许: 数字类型索引的返回值类型，必须是字符串索引类型返回值类型的字类型
    // 结论：数字类型必须是比字符串类型更加确定的类型（需要是字符串类型的字类型）
    // 原因： 所有的数字类型都是会转成字符串类型去对象中获取内容
    // 数字0: number|string, 当我们是一个数字的时候，既要满足通过 number 去拿到的内容，不会和 string 拿到的结果矛盾
    // 数字""0": string

    [index: number]: string|number
    [index: string]: number

    // 正确的写法
    // [index: number]: string
    // [index: string]: number|string


    
    // 要求二：
    // 如果索引签名中，有定义其他属性，其他属性返回的类型，必须符合 string 类型返回的属性
    [index: number]: string
    [index: string]: number|string
    aaa: boolean
    // aaa必须满足返回的类型是 string 返回的类型 number|string
}

const names: IIndexType = ['abc', 'cba', 'nba']
const item1 = names[0]
const forEachFn = names["forEach"]

export {}