/**
 * @为什么要有继承
 * 如果每个函数或对象
 * 都重复实现功能, 会很难管理
 * 此时继承就尤为重要
 */

/**
 * @函数继承
 * 下面的即可以继承Animal内部的数据
 * 也可以继承Animal原型的数据
 *
 *
 * 至于其他什么原型继承,构造继承,组合继承,寄生组合继承了解即可
 * @原型继承
 *  Child.prototype = new Parent();
 * @构造继承
 *  Parent.call(this);
 * @组合继承
 *  Parent.call(this); Child.prototype = Parent.prototype;
 * @寄生组合继承
 *  Parent.call(this);
 *  Child.prototype = Object.create(Parent.prototype, {
 *    constructor: {
 *      value: Child
 *    }
 *  })
 */

function _extends(child, parent) {
  Object.setPrototypeOf(child.prototype, parent.prototype);
}

function Animal() {
  this.species = "动物";
}
Animal.prototype.type = "Animal";

function Cat(name, color) {
  Animal.apply(this, arguments);
  this.name = name;
  this.color = color;
}

_extends(Cat, Animal);

let cat1 = new Cat("大毛", "黄色");

/**
 * @对象继承
 */

let Chinese = {
  nation: "中国",
};

let Doctor = {
  career: "医生",
};

Object.setPrototypeOf(Doctor, Chinese);

Doctor.nation; // '中国'
