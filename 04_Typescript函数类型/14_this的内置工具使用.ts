function foo(this: { name: string }, info: {name: string}, obj: {name: string}) {
    console.log(this, info)
}

// 获取函数的类型
type FooType = typeof foo
// 1. ThisParameterType: 获取 FooType 类型中 this 的类型
type FooThisType = ThisParameterType<FooType>

// 2. OmitThisParamter: 删除 this 参数类型，剩余的函数类型
type PureFooType = OmitThisParameter<FooType>

// 3. ThisType: 用于绑定一个上下文的 this
interface IState {
    name: string
    age: number
}
interface IStore {
    state: IState
    eating?: () => void
    running?: () => void
}


const store: IStore  = {
    state: {
        name: 'xizhou',
        age: 20
    },
    // 让函数中的 this 指向 state 方案一
    eating: function(this: IState) {
        console.log(this.name)
    },
    running: function(this: IState) {
        console.log(this.name)
    }
}

const store1: IStore & ThisType<IState>  = {
    state: {
        name: 'xizhou',
        age: 20
    },
    // 指定 store1 的类型
    eating: function() {
        console.log(this.name)
    },
    running: function() {
        console.log(this.name)
    }
}


export {}