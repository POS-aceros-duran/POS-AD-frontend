import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent {
  currentSlide: number = 0;

  slides = [
    { image: '/assets/images/login/aceros.png'},
    { image: '/assets/images/login/Racks-Tubos-Acero-Inoxidable.jpg' }
    
  ];

  goToSlide(index: number) {
    this.currentSlide = index;
  }
}
