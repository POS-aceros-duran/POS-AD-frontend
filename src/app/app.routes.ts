import { Routes } from '@angular/router';
import { LoginContainerComponent } from './components/public/login/login-container/login-container/login-container.component';

export const routes: Routes = [
  {
    path: '**',
    pathMatch: 'full',
    component: LoginContainerComponent,
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
