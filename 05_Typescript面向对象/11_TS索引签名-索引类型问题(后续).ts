interface IIndexType {
    // [aaa: number]: any
    [bbb: string]: string
}

const numbers: IIndexType = ['bac', 'cba', 'nba']
// 以上两种索引类型用到数组上都是没有问题的，原因：
// 通过数字类型访问索引时，最终都是转化为 string 类型访问的
console.log(numbers[0])
console.log(numbers['0'])


const info: IIndexType = { name: 'xizhou', age: 18, height: 188}
console.log(info['name'])
console.log(info['age'])

export {}