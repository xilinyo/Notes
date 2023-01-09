class MyPromise {
  // 内部状态
  state: "pending" | "fulfilled" | "rejected" = "pending";
  value = undefined;

  constructor(callback: Function) {
    // 用来改变 MyPromise 内部状态
    const resolve = (data: any) => {
      if (this.state === "pending") {
        this.state = "fulfilled";
        this.value = data;

        this.onResolvedCallbacks.forEach((fn) => {
          fn();
        });
      }
    };

    // 用来改变 MyPromise 内部状态
    const reject = (data: any) => {
      if (this.state === "pending") {
        this.state = "rejected";
        this.value = data;

        this.onRejectedCallbacks.forEach((fn) => {
          fn();
        });
      }
    };

    try {
      callback(resolve, reject);
    } catch (error) {
      resolve(error);
    }
  }

  private onResolvedCallbacks: Array<Function> = [];
  private onRejectedCallbacks: Array<Function> = [];

  then(
    onFulfilled: Function = (data: any) => data,
    onRejected: Function = (err: any) => {
      throw err;
    }
  ) {
    const compatible = (
      rtPromise: any,
      result: any,
      resolve: Function,
      reject: Function
    ) => {
      if (result?.then && typeof result.then === "function") {
        result?.then.call(
          result,
          (r: any) => compatible(rtPromise, r, resolve, reject),
          (err: any) => reject(err)
        );
      } else {
        resolve(result);
      }
    };

    const rt = new MyPromise((resolve: Function, reject: Function) => {
      switch (this.state) {
        case "fulfilled":
          setTimeout(() => {
            try {
              compatible(rt, onFulfilled(this.value), resolve, reject);
            } catch (error) {
              reject(error);
            }
          }, 0);
          break;
        case "rejected":
          setTimeout(() => {
            try {
              compatible(rt, onRejected(this.value), resolve, reject);
            } catch (error) {
              reject(error);
            }
          }, 0);

          break;
        case "pending":
          this.onResolvedCallbacks.push(() => {
            setTimeout(() => {
              try {
                compatible(rt, onFulfilled(this.value), resolve, reject);
              } catch (error) {
                reject(error);
              }
            }, 0);
          });
          this.onRejectedCallbacks.push(() => {
            try {
              compatible(rt, onRejected(this.value), resolve, reject);
            } catch (error) {
              reject(error);
            }
          });
          break;
      }
    });

    return rt;
  }
  catch(onRejected: Function) {
    return this.then(undefined, onRejected);
  }
  //   finally() {}
}

const sd = new MyPromise((resolve: Function) => {
  setTimeout(() => {
    resolve(2222);
  }, 1000);
});

const sss = sd.then((resp: any) => {
  console.log(resp, "then-resp");
});
console.log(sss, "then-return-sss");
sss.then((resp: any) => {
  console.log(resp, "then.then-resp");
});
