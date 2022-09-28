import { NgModule } from '@angular/core';
import { WrapperComponent } from './wrapper.component';
import { ModuleRoutingModule } from './routing.module';

@NgModule({
  /**
   * @declarations
   * 声明可在此模块下任意位置使用的组件、指令、管道
   */
  declarations: [WrapperComponent],
  /**
   * @imports
   * 导入模块
   */
  imports: [ModuleRoutingModule],
  /**
   * @bootstrap
   * 根组件
   */
  bootstrap: [WrapperComponent],
  /**
   * @providers
   * 服务
   */
  providers: [],
  /**
   * @exports
   * 导出
   */
  exports: [],
})
export class IndexModule {}
