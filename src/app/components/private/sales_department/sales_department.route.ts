import { Routes } from '@angular/router';

export default [
    {
        path: '',
        loadComponent: () =>
            import('@app/sales_department').then(
                (m) => m.StudentsLayoutComponent
            ),
        children: [
            // {
            //     path: 'addPatient',
            //     loadComponent: () =>
            //         import('./components/form-patient-personal-data/form-patient-personal-data.component').then(
            //             (m) => m.FormPatientPersonalDataComponent
            //         ),
            // },
            {
                path: '**',
                pathMatch: 'full',
                redirectTo: '',
            },
        ],
    },
] as Routes;
