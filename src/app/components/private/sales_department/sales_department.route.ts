import { Routes } from '@angular/router';

export default [
    {
        path: '',
        loadComponent: () =>
            import('@app/sales_department').then(
                (m) => m.StudentsLayoutComponent
            ),
        children: [
            {
                path: 'm3',
                loadComponent: () =>
                    import('./demo-m3/demo-m3.component').then(
                        (m) => m.DemoM3Component
                    ),
            },
            {
                path: '**',
                pathMatch: 'full',
                redirectTo: '',
            },
        ],
    },
] as Routes;
