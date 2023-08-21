class Pointer<Type> {
    x: Type
    y: Type
    constructor(x: Type, y: Type) {
        this.x = x
        this.y = y
    }
}

const p1 = new Pointer(10, 20)
const p2 = new Pointer<string>('123', '321')

export {} 