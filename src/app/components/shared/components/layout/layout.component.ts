import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { NavbarComponent } from '../navbar/navbar.component';
import AdicionalComponent from "../../../private/sales_department/components/products/registerproduct/aditionall/aditional.component";

@Component({
  /**Importar componentes */
  selector: 'app-layout',
  standalone: true,
  imports: [SidebarComponent, FooterComponent, RouterOutlet, NavbarComponent, AdicionalComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export default class LayoutComponent {
  

}
