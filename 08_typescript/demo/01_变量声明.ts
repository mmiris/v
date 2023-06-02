let name: string = 'shadow'
console.log(name)

// unknown 类型可以被任何类型赋值，但 unknown 类型只能赋值给 any 和 unknown 类型
let result: unknown
let result1: unknown

result = "Heaven's side"
result1 = result

let variable: any = 0
result = variable

console.log(result)
console.log(typeof result)

const judge: boolean = true
const variable2: null = null
const variable3: undefined = undefined

const variable4: Array<string> = ['shadow', 'iris']
const variable5: string[] = ['iris', 'shadow']

const variable6 = { name: 'shadow', age: 2 }
console.log(variable6.name)

function foo(param: number, param1: string, param2?: string | undefined): [number, () => string] {
  return [param, () => param + param1]
}
const [digital, fn] = foo(0, 'iris')

console.log(digital)
console.log(fn())

type Person = { name: string; age: number; friend?: { age?: number } }

const info: Person = { name: 'naive', age: 2, friend: {} }

console.log(info.friend?.age)

function add(n1: number, n2: number, fn: (el1: number, el2: number) => number) {
  return fn(n1, n2)
}

console.log(add(1, 2, (n1, n2) => n1 + n2))

export {}
