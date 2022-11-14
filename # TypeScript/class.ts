/**
 * 标识符 abstract 可以标记抽象类/属性/方法, 必须要在派生类中实现, 额外的 protected 在派生类中实现时可以标记为 public
 */
abstract class AbstractClasses {
  abstract version: string;
  protected abstract jor: () => void;
}

interface NoneInterface {}
/**
 * 类可以通过 extends 继承并扩展类
 * 也可以通过 implements 规范类的实现符合一系列接口/类型的定义
 * 标识符 private 代表的是私有属性, 只能在声明的类中使用, 这只是 TypeScript 中生效, 在 JavaScript 运行中 # 才是真正的私有属性
 * 标识符 protected 表示受保护的属性, 在子类中是可以访问与更改的
 * 标识符 public 表示公共的
 * 在 TypeScript Class 中凡是通过赋值生成的属性都是实例属性
 * 其中 箭头函数 () => 也是实例属性, 比不过是一个函数而已，并且可以保留 this 指向
 * 通过 function 定义的是原型方法, 可以通过 this 参数, 规范使用者必须是该类的实例
 * 通过 setter getter 访问器, 可以定义原型属性
 * 标识符 static 可以声明静态属性/方法, 也可以声明静态域, 常用来初始化静态属性, 其中 this 指向类本身
 */

class DerivedClasses
  extends AbstractClasses
  implements NoneInterface, NoneInterface
{
  version: string;
  name: string;
  color?: string; /** */ /** 可选参数 */
  id!: string; /**    */ /** 告诉 TypeScript 这是必定会被赋值的字段 */
  #serial: string;
  constructor(
    name: string,
    private _id: symbol,
    protected display: string,
    public dispatch: object
  ) {
    super();
    this.name = name;
    // this.xxx = ''; Error
    // 构造函数中, 用来对实例字段进行初始化
    // 标识符 private/protected/public 声明的参数, 会自动设置为实例属性
  }

  jor = () => this._id;

  /** 参数 this 可以指定调用者必须是该类的实例 */
  sync(this: DerivedClasses) {}

  get u() {
    return this.#serial;
  }

  static dar: string;
  static #deep: string;
  static sync() {}

  static {
    this.dar = "";
    this.#deep = "";
  }
}
