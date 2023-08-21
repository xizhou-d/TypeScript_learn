interface IKun<Type> {
    name: Type
    age: number
    slogen: Type
}

const kun: IKun<string> = {
    name: 'zhou',
    age: 18,
    slogen: 'dkkdj'
}

const kun1: IKun<number> = {
    name: '123',
    age: 19,
    slogen: 'kkkkk'
}



// interface 在使用泛型的时候可以指定默认的类型
interface IKun1<Type = number> {
    name: Type,
    age: number,
    slogen: Type
}

const kun2: IKun1 = {
    name: 'dong',
    age: 18,
    slogen: 'skflskfsl'
}