// 传入的 key 类型，obj 当中 key 的其中之一

interface IKun {
    name: string
    age: number
}
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