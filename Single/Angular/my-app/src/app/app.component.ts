import { Component } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  styles: [
    '.app-wrapper { background:#ff9800;height:100%;width:100%;overflow: hidden;}h3 {text-align: center;}',
  ],
  template: `
    <div class="app-wrapper">
      <router-outlet><h3>整个页面的盒子</h3></router-outlet>
    </div>
  `,
})
export class AppComponent {}
