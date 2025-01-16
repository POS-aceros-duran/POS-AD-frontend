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
                path: 'dashboard',
                loadComponent: () =>
                    import('./components/dashboard/dashboard.component').then(
                        (m) => m.DashboardComponent
                        
                    )

            },            
            {
                path: 'product',
                loadComponent: () =>
                    import('./components/products/products.component').then(
                        (m) => m.ProductsComponent
                    ),
            }, 
            {
                path: 'registerP',
                loadComponent: () =>
                    import('./components/products/registerproduct/registerproduct.component').then(
                        (m) => m.default
                    ),
            },
            {
                path: 'controlarInventario',
                loadComponent: () =>
                    import('./components/products/registerproduct/controlar-inventario/controlar-inventario.component').then(
                        (m) => m.default
                    ),
            },
            {
                path: 'aditional',
                loadComponent: () =>
                    import('./components/products/registerproduct/aditional/aditional.component').then(
                        (m) => m.default
                    ),
            },  
            {
                path: 'profile',
                loadComponent: () =>
                    import('./components/profile/profile.component').then(
                        (m) => m.ProfileComponent
                    )

            },
            {
                path: 'tables',
                loadComponent: () =>
                    import('./components/tables/tables.component').then(
                        (m) => m.default
                    )
            },                  
            {
                path: '**',
                pathMatch: 'full',
                redirectTo: '',
            },
        ],
    },
] as Routes;
