class Person {
    private _name: string
    private _price: number
    
    constructor(name: string, price: number) {
        this._name = name
        this._price = price
    }

    eating() {
        console.log('running:', this.name)
    }

    set name(newValue: string) {
        this._name = newValue
    }

    get name() {
        return this._name
    }

    set price(newValue: number) {
        if (newValue > 0 && newValue < 200) {
            this._price = newValue
        }
    }

    get price() {
        return this._price
    }
}
// 私有属性可以在 constructor 和 其他方法中使用
// 但是不能在类外面直接访问

const p = new Person('xizhou', 100)
// p._name

// 私有属性访问不到，可以使用 setter 和 getter 方法
console.log(p.name)
p.name = 'dongzhou'

export {}