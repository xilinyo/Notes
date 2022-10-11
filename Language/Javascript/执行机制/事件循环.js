/**
 * @单线程
 * 因为用途是与用户交互以及操作dom
 * 如果是多线程针对一个dom的增删操作就无法校准
 */

/**
 * @事件循环
 * 事件循环由一个个宏任务组成，
 * 当一个宏任务结束后开启新的宏任务，
 * 宏任务执行中，
 * 如果遇到同步任务则立刻执行
 * 如果遇到宏任务则将该任务加入到事件循环中
 * 如果遇到微任务，暂时挂起
 * 并在本次宏任务执行完所有同步任务后，清理挂起的所有微任务
 * 如果微任务执行中产生新的微任务，将立刻开始执行该微任务
 * 只到没有微任务产生
 * 至此一个微任务便执行完毕
 * 如果微任务执行中产生新的宏任务，则加入到事件循环中
 * 将所有微任务清理后，一个宏任务便执行完毕
 * 开启下一个宏任务
 */

setTimeout(function () {
  console.log(1);
  new Promise(function (resolve) {
    console.log(2);
    resolve();
  }).then(function () {
    console.log(3);
    setTimeout(function () {
      console.log(4);
      new Promise(function (resolve) {
        console.log(5);
        resolve();
      }).then(function () {
        console.log(6);
      });
    });
  });
  setTimeout(function () {
    console.log(7);
    new Promise(function (resolve) {
      console.log(8);
      resolve();
    }).then(function () {
      console.log(9);
    });
  });
});

setTimeout(function () {
  console.log(10);
  new Promise(function (resolve) {
    console.log(11);
    resolve();
  }).then(function () {
    console.log(12);
  });
});

// 1,2,3,10,11,12,7,8,9,4,5,6
