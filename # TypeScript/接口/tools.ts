/**
 * @类型断言
 */
 const _isAny: unknown = "类型断言";
 const NAL: number = (<string>_isAny).length; /**   */ /* 方式一 */
 const IAL: number = (_isAny as string).length; /** */ /* 方式二 */
 
 /**
  * @非空断言
  */
type sss =  NonNullable<string | null | undefined>;
let _isEmpty:sss;
 const IEL = _isEmpty!.length; /**   */ /* !表示该对象不是空 */
 
 /**
  * @确定赋值断言
  */
 let _isNumber!: number;
 console.log(_isNumber); /**   */ /* 没有断言会报错 */
 
Array<string>
/**
 * @范型约束
 */

interface Lengthwise {
    length: number;
  }
  
  
  function getLength<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
  }

  /** */ /** @类型断言 Value as T */
/** */ /** @类型断言 <T>Value   */


/**
 * @in
 */
 function _in(props: { x: string } | { y: number }) {
    if ("x" in props) {
      console.log(props.x);
    }
    if ("y" in props) {
      console.log(props.y);
    }
  }
  
  /**
   * @typeof
   */
  function _typeof(val) {
    if (typeof val === "string")
      if (typeof val === "number")
        if (typeof val === "bigint")
          if (typeof val === "boolean")
            if (typeof val === "symbol")
              if (typeof val === "undefined")
                if (typeof val === "object")
                  if (typeof val === "function") {
                  }
  }
  
  /**
   * @instanceof
   */
  // function _instanceof(date: Date | string) {
  //   if (date instanceof Date) {
  //     return date.getDate();
  //   } else {
  //     return new Date(date);
  //   }
  // }
  
  /**
   * @自定义守卫
   */
  function isNumber(x: any): x is number {
    return typeof x === "number";
  }
  function isString(x: any): x is string {
    return typeof x === "string";
  }
  