/**
 * 明确的指定<数组>的类型注解
 * 1. string[]: 数组类型，并且数组中存放的是字符串类型
 * 2. Array<string>: 数组类型，并且数组中存放的是字符串类型
 *    Array<number>: 数组类型，并且数组中存放的是数字类型
 */

// 注意事项: 在真实的开发中，数组中一般存放着相同的类型，不要存放不同的类型
let names: string[] = ['abc', 'cba', 'nba']
names.push('aaa')
// names.push(123)

let items: Array<string> = ['aaa', 'bbb', 'ccc']

export {}