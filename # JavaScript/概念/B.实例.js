/**
 * @什么是实例
 * 通过new操作符生成的对象为实例
 */

function Cat(name, color) {
  /**
   * @不同的实例不同的数据
   * @优点
   */
  this.name = name;
  this.color = color;

  /**
   * @不同的实例相同的方法
   * @缺点
   * @占用没必要的内存
   */
  this.say = function () {
    console.log("喵喵!");
  };
}

/**
 * @通过原型解决该缺点
 */
Cat.prototype.eat = function () {
  console.log("吃");
};

const cat1 = new Cat("大毛", "黄色"); // Cat {name: '大毛', color: '黄色', say: ƒ}
const cat2 = new Cat("小毛", "黑色"); // Cat {name: '小毛', color: '黑色', say: ƒ}

cat1.eat(); // 吃
