// 区别一： type 的使用范围更广,  接口类型只能用来声明对象
type MyNumber = number 

// 区别二： 在声明对象时， interface 可以多次声明
// type Person = {
//     name: string
//     running: () => void
// }

// type Person = {
//     age: number
// }
    // type 在重复声明的时候会报错的 Duplicate identifier 'Person'.

interface Person {
    x: number
    y: number
}

interface Person {
    z: number
}

// interface 重复声明，在使用的时候相当于合并在一起，里面的属性都必须在对象中有体现，除了可选的属性
const person: Person = {
    x: 1,
    y: 2,
    z: 3
}


// 区别三：interface 是可以继承的
interface IPerson {
    name: string
    age: number
}

// interface IKun {
//     name: string
//     age: number
// }

/**
 * 以上 interface IKun 定义的类型和 IPerson 是重复的，此时可以使用继承
 */

interface IKun extends IPerson {
    kouhao: string
}

const ikun1: IKun = {
    name: 'xizhou',
    age: 19,
    kouhao: 'aaaaaa'
}

// ❗️ 总结： 如果是非对象类型的定义使用 type，如果是对象类型的定义使用 interface ，interface 的拓展性更强大
