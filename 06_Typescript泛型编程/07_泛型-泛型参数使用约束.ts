// 传入的 key 类型，obj 当中 key 的其中之一

interface IKun {
    name: string
    age: number
}
/** 来自 Gemini 的解释
 * 在 TypeScript 中，对象的属性名称必须是 keyof any 类型的。keyof any 类型表示所有对象属性的名称类型。

    Record<K, T> 类型的 K 类型必须是 keyof any 类型。因此，Record<any, any> 类型的 K 类型也必须是 keyof any 类型。

    keyof any 类型等同于 string | number | symbol 类型。也就是说，对象的属性名称只能是字符串、数字或 symbol 类型。

    因此，Record<any, any> 类型表示一个对象，其中所有属性的名称和值的类型都是任意类型，但属性名称必须是字符串、数字或 symbol 类型。
 */

// IKumKeys 的类型是一个联合类型，就是联合了 IKun 中所有 key 的属性名  =>  "name"|"age"
type IKunKeys = keyof IKun

function getPropertyOfObject<O, K extends keyof O>(obj: O, key: K) {
    return obj[key]
}

function getPropertyOfObject1<O, K extends "name"|"age"|"height ">(){}

const info = {
    name: 'xo',
    age: 19,
    height: 188
}

const name = getPropertyOfObject(info, 'address')

export {} 