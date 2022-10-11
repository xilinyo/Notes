/**
 * @类
 */

class Animal {
  /**
   * 实例化的时候添加到实例对象上
   */
  constructor() {
    this.species = "Animal";
  }

  /**
   * 会被放到原型上
   * 此时的 this 指向调用者
   */
  hi() {
    console.log(`I'm ${this.species}`);
  }

  /**
   * 会被放到类的属性上
   * 这里的 this 指向 Animal
   */
  static type = "Type";
  static jump = () => {
    console.log("Jump");
  };
  static say = (species) => {
    console.log(`${this.type} - ${species || this.species}`);
  };
}
Animal.prototype; // {constructor: ƒ, say: ƒ}
Animal.say(); // Type - undefined

/**
 * @类的原型链
 */
Animal.__proto__ === EventTarget;
EventTarget.__proto__ === Function.prototype;

/**
 * @类的实例
 */
let an1 = new Animal(); // Animal {species: 'Animal'}
an1.__proto__ === Animal.prototype;

/**
 * @继承类
 */
class Dog extends Animal {
  constructor(name, color) {
    super();
    this.name = name;
    this.color = color;
  }

  /**
   * 原型方法中
   * super 代表 父类的原型 - Animal.prototype
   */

  hi() {
    super.hi();
  }

  /**
   * 静态方法中
   * super 代表 父类 - Animal
   */
  static say() {
    super.say("Dog");
  }
}

Dog.say(); // Type - Dog

/**
 * @继承类的原型链
 */
Dog.prototype; // Animal {constructor: ƒ, hi: ƒ}
Dog.__proto__ === Animal;

/**
 * @继承类的实例
 */
let d1 = new Dog(); // Dog {species: 'Animal', name: undefined, color: undefined}
d1.hi(); // I'm Animal
d1.__proto__ === Dog.prototype;
