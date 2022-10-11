/**
 * @函数闭包
 */
const func = () => {
  let count = 0;
  return (x) => {
    return x + count++;
  };
};

const f1 = func();
f1(1); // 1
f1(1); // 2

/**
 * @私有变量
 */
function func() {
  let count = 0;
  this.getC = function () {
    return ++count;
  };
}

const f = new func();
f.getC(); // 1
f.getC(); // 2

/**
 * @模块化
 */

const module = (() => {
  let count = 0;
  const getC = () => ++count;
  return {
    getC,
  };
})();

module.getC(); // 1
module.getC(); // 2
