function foo<Type, Element>(arg1: Type, arg2: Element) {

}

foo(10, 'skdfslkfl')
foo(10, 20)
foo<number, { name: string }>(10, { name: 'aaaa' })
