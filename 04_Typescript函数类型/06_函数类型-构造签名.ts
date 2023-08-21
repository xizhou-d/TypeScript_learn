class Person {

}

interface ICTORPerson {
    new (): Person
}

function foo(Fn: ICTORPerson) {
    const f = new Fn()
}

foo(Person)

export {}