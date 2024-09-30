import { LocalStorageService } from './../../../services/local-storage.service';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, inject } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';

import { Router } from '@angular/router';
import { AuthService } from '@app/services';
import { SessionStorageConstants } from 'src/app/utils/session.storage';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [MatMenuModule, CommonModule],
})

export class HeaderComponent {
  @Output() closeSidebar = new EventEmitter<void>();
  
  public localStorageService = inject(LocalStorageService)

  isDarkTheme: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    // Al iniciar, cargar el tema guardado o aplicar el tema claro por defecto
    const savedTheme = this.localStorageService.getItem('theme');
    this.isDarkTheme = savedTheme === 'dark';
    this.applyTheme(); // Aplica el tema de Angular Material
    this.applyGlobalTheme(); // Aplica el tema global que afecta a toda la aplicación
  }

  toggleSidebar() {
    this.closeSidebar.emit();
    console.log('emiting');
  }

  logout(): void {
    const token = this.authService.getToken();
    if (token) {
      this.localStorageService.removeItem(SessionStorageConstants.USER_TOKEN);
    }
    this.router.navigate(['/']);
  }

  // Método para alternar el tema claro/oscuro
  toggleTheme(): void {
    
  }

  // Método para aplicar el tema de Angular Material
  private applyTheme(): void {
    
  }

  // Método para aplicar el tema global
  private applyGlobalTheme(): void {
    
  }
}
