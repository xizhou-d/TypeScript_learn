// 在映射的过程中变成了可选属性 
// - 符号可以删除 readonly 和 ? 
type MapPerson<Type> = {
    -readonly [Property in keyof Type]-?: Type[Property] 
}

interface IPerson {
    name: string
    age?: number
    readonly height: number
    address?: string
}

// 如果仅仅是拷贝一份接口声明的类型
type NewIPerson = IPerson
// p 里面的所有属性都需要添加，都是必须的 
type NewIPerson1 = MapPerson<IPerson>
const p: NewIPerson1 = {

}

export {}