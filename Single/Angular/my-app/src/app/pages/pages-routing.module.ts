import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

// 每个模块注册在这里
const moduleRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        redirectTo: 'example',
        pathMatch: 'full',
      },
      {
        path: 'example',
        loadChildren: () =>
          import('./example/index.module').then((m) => m.IndexModule),
      },
      // {
      //   path: '模块xxx',
      //   loadChildren: () => import('./模块/模块.module').then((m) => m.模块Module),
      // },
      // {
      //   path: '模块xxx',
      //   loadChildren: () => import('./模块/模块.module').then((m) => m.模块Module),
      // },
      // {
      //   path: '模块xxx',
      //   loadChildren: () => import('./模块/模块.module').then((m) => m.模块Module),
      // },
      // {
      //   path: '模块xxx',
      //   loadChildren: () => import('./模块/模块.module').then((m) => m.模块Module),
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(moduleRoutes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
