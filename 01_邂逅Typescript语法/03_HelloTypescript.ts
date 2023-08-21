// string: Typescript 给我们定义标识符时， 提供的字符串类型
// String: Javascript 中字符串的包装类

let message: string = 'hello world'
// message = 123    (会报错：Type 'number' is not assignable to type 'string'. )
console.log('message', message)
// message = 123

// function logMessage(message: string) {
//     console.log('message', message)
// }
// logMessage(123)
// logMessage('aaaa')

export {}