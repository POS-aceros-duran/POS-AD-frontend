import { Routes } from '@angular/router';
import { LoginContainerComponent } from './components/public/login/login-container/login-container/login-container.component';
import { DemoM3Component } from './components/private/sales_department/demo-m3/demo-m3.component';
import { FormLoginComponent } from './components/public/login/components/form-login/form-login.component';

export const routes: Routes = [
  {
    path: 'sales-department',
    loadChildren: () => import('./components/private/sales_department/sales_department.route')
  },
  {
    path: '',
    component: LoginContainerComponent,
  },
  {
    path: '',
    loadComponent: () => import('./components/shared/components/layout/layout.component'),
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./components/business/dashboard/dashboard.component')
      },
      {
        path: 'profile',
        loadComponent: () => import('./components/business/profile/profile.component')
      },
      {
        path: 'tables',
        loadComponent: () => import('./components/business/tables/tables.component')
      } 
    ]
  }

/*   {
    path: '',
    //loadChildren: () => import('./components/public/login/login.route.ts')
  },

  {
    path: 'admin',
    //loadChildren: () => import('./components/private/admins/admin.route')
  },
  */
];
