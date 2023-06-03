interface IAction {
  foo: (param: string) => number
}

interface IAge {
  age: number
}

type IntersectionType = IAction & IAge

const obj: IntersectionType = {
  age: 3,
  foo(param: string) {
    return param.length
  }
}

console.log(obj.foo('shadow'))

interface IInheritance extends IAction, IAge {
  addr: string
}

const obj1: IInheritance = {
  age: 2,
  foo: (param: string) => param.length,
  addr: "Heaven's side."
}

console.log(obj1.addr)

class Foo implements IAction, IAge {
  age: number
  constructor(age: number) {
    this.age = age
  }
  foo(param: string) {
    return param.length
  }
}

console.log(new Foo(3).foo('naive'))

type Atype = { foo: (param: number) => number }
type BType = { name: string }

type CType = Atype & BType

const obj2: CType = {
  name: 'shadow',
  foo(param: number) {
    return param
  }
}

console.log(obj2.foo(3))

class Bar implements Atype, BType {
  name: string
  constructor(name: string) {
    this.name = name
  }
  foo(param: number) {
    return param
  }
}

console.log(new Bar('shadow').foo(1))
