/**
 * @方法重载
 */

let obj = {};

function addMethodToObject(obj, name, fn) {
  // A.定义一个变量
  const temp = obj[name];
  // B.为对象属性赋值
  obj[name] = function () {
    // 当调用此方法时, obj[name]()
    // 执行下面的函数
    // 如此时的fn为最后一次赋值的方法, 那A.temp为倒数第二次赋值的方法
    if (fn.length === arguments.length) {
      // 如果参数与最后一次的方法参数一致
      // 直接执行
      return fn.apply(obj, arguments);
    } else if (typeof temp === "function") {
      // 否则执行缓存的temp方法
      // 致往上循环只到参数一致
      return temp.apply(obj, arguments);
    }
  };
}

addMethodToObject(obj, "getC", function () {
  return 0;
});

addMethodToObject(obj, "getC", function (count) {
  return count * count;
});

addMethodToObject(obj, "getC", function (x, y) {
  return x * y;
});

obj.getC();
