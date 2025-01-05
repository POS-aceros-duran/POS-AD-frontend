import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-registerproduct',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './registerproduct.component.html',
  styleUrl: './registerproduct.component.scss',

})

export default class RegisterproductComponent {
  images: string[] = []; // Arreglo para almacenar las imágenes seleccionadas

  // Maneja la selección de una nueva imagen
  onImageSelected(event: Event): void {
    if (this.images.length >= 2) {
      alert('Solo puedes agregar hasta 2 imágenes.');
      return;
    }

    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.images.push(reader.result as string); // Agrega la nueva imagen al arreglo
      };
      reader.readAsDataURL(file);
    }
  }

  // Dispara el campo de archivo al hacer clic en el botón
  triggerFileInput(fileInput: HTMLInputElement): void {
    fileInput.click();
  }

  // Elimina la última imagen seleccionada
  removeLastImage(): void {
    if (this.images.length > 0) {
      this.images.pop(); // Elimina la última imagen del arreglo
    }
  }
}