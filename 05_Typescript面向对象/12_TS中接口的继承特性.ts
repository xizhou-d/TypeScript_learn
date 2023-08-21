interface IPerson {
    name: string
    age: number
}

// 这种方式可以使用继承
// interface IIkun {
//     name: string
//     age: number

//     slogen: string
// }

// 可以从其他的 interface 中继承过来属性
// 1. 减少相同代码的重复编写
// 2. 如果使用第三方库给我们定义了一些属性；自定义一个接口，同时你希望自定义接口拥有第三方库中某一个类型中所有的属性，可以使用继承来完成  
interface IIkun extends IPerson {
    slogen: string
}

const ikun: IIkun = {
    name: 'xizhou',
    age: 19,
    slogen: 'aksdjfsk'
}