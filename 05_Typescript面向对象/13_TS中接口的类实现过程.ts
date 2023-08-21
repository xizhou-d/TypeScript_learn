interface IKun {
    name: string
    age: number
    slogen: string

    play: () => void
}

interface IRun {
    running: () => void
}

// 一般的用法
const ikun: IKun = {
    name: 'xizhou',
    age: 18,
    slogen: 'klsdfk',

    play() {

    }
} 

// 接口的类实现
class Person implements IKun, IRun {
    name: string
    age: number
    slogen: string
    
    play() {}
    running() {}

}

const ikun1 = new Person()
// console.log(ikun1.name, ikun1.age, ikun1.slogen)
ikun1.play()

export {}