interface IPerson {
    name: string
    age: number
    height: number
}

const p: IPerson = {
    name: 'zhou',
    age: 18,
    height: 188
}



// 索引签名的理解
type InfoType = {
    // 索引签名：可以通过字符串签名，去获取到一个值，也是字符串
    [key: string]: string
}
function getInfo(): InfoType {
    const abc: any = 'dlskdf'

    return abc
}
// 如果 getInfo 是莫某个第三方库的方法，返回的内容，你不知道内容是什么
const info = getInfo()
const name = info['name']





// 2. 索引签名的案例
interface ICollection {
    [index: number]: string
    length: number
}
function printCollection(collection: ICollection) {
    for (let i = 1; i < collection.length; i++) {
        const item = collection[i]
        console.log(item.length)
    }
}
const names = ['abc', 'cab', 'nab ']
const tuple: [string, string] = ['zhou', 'shenzhen']

printCollection(names)
printCollection(tuple)

export {}