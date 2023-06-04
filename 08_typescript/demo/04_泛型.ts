interface ILength<T> {
  length: T
}

function foo<T, T1 extends ILength<number>, T2 = number>(param: T, param1: T1, param2: T2): T {
  console.log(param2)
  console.log(param1.length)

  return param
}

foo<number, string>(12, 'a', 18)
foo(18, { length: 12 }, 'c')

interface IInfo<T, T1 = number[]> {
  name: T
  age: T1
}

const info: IInfo<string> = {
  name: 'shadow',
  // age: 1,
  age: [1, 2]
}

class Animal<T, T1 = number> {
  name: T
  age: T1
  constructor(name: T, age: T1) {
    this.name = name
    this.age = age
  }
}

new Animal('shadow', [1, 2])

export {}
