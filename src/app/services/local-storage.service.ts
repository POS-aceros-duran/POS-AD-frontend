import { Injectable, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  // Verifica si estamos en el navegador
  private isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  // Obtener un valor del localStorage
  getItem(key: string): string | null {
    if (this.isBrowser()) {
      return localStorage.getItem(key);
    }
    return null;
  }

  // Guardar un valor en el localStorage
  setItem(key: string, value: string): void {
    if (this.isBrowser()) {
      localStorage.setItem(key, value);
    }
  }

  // Eliminar un valor del localStorage
  removeItem(key: string): void {
    if (this.isBrowser()) {
      localStorage.removeItem(key);
    }
  }

  // Limpiar todos los valores del localStorage
  clear(): void {
    if (this.isBrowser()) {
      localStorage.clear();
    }
  }

  // Verificar si existe un valor en el localStorage
  hasItem(key: string): boolean {
    if (this.isBrowser()) {
      return localStorage.getItem(key) !== null;
    }
    return false;
  }
}
