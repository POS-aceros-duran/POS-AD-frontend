import { IconDefinition, faHome } from '@fortawesome/free-solid-svg-icons';


    export interface MenuItem {
      fontAwesomeIcon: IconDefinition; // Reemplaza con el ícono FontAwesome que desees
      buttonText: string;
      buttonDescription: string;
      routerlink: string;
    }
  
    export const salesDepartmentItems: MenuItem[] = [
      {
        fontAwesomeIcon: faHome,
        buttonText: 'Inicio',
        buttonDescription: 'Información del usuario',
        routerlink: '/sales_department'
      },
    ];
    
  