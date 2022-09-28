import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LostComponent } from './authority/lost/lost.component';
import { LoginComponent } from './authority/login/login.component';

// 这里定义根路由
const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'example',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    // 这里懒加载所有模块
    loadChildren: () =>
      import('./pages/pages.module').then((m) => m.PagesModule),
  },
  {
    path: '**',
    redirectTo: 'lost',
    pathMatch: 'full',
  },
  {
    path: 'lost',
    component: LostComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
