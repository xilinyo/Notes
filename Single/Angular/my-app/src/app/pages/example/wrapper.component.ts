import { Component, OnInit } from '@angular/core';

@Component({
  /**
   *  @selector
   *  选择器
   */
  selector: 'example-wrapper',
  /**
   * @styles
   * 样式
   */
  styles: [
    '.pages-wrapper { background:#3f51b5;height:100%;width:100%;overflow: hidden;}h3 {text-align: center;}',
  ],
  /**
   * @template
   * 模版
   */
  template: `
    <div class="pages-wrapper">
      <router-outlet><h3>模块自己的盒子，子路由的容器</h3></router-outlet>
    </div>
  `,
})
export class WrapperComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
