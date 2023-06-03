abstract class Animal {
  name: string
  readonly age: number
  private _money: number = 999
  protected house: string = 'White House'

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  static eating() {
    console.log('Animal is eating...')
  }

  get money() {
    console.log('The following is private money of Animal:')
    return this._money
  }

  set money(newValue: number) {
    this._money = newValue
  }

  abstract action(): string
}

class Dog extends Animal {
  constructor(name: string, age: number) {
    super(name, age)
  }

  action(): string {
    this.house = 'Taj Mahal'
    console.log(`${this.name}'house is ${this.house}.`)
    return '🐶'
  }
}

class Cat extends Animal {
  constructor(name: string, age: number) {
    super(name, age)
  }

  action(): string {
    console.log(`${this.name}'house is ${this.house}.`)
    return '🐹'
  }
}

const action = (animal: Animal) => {
  console.log(animal.action())
}

const dog = new Dog('shadow', 1)
const cat = new Cat('naive', 2)

action(dog)
action(cat)
// action(new Animal())

// dog.age = 1
dog.money = 1000
console.log(dog.money)
console.log(cat.money)
Animal.eating()
