import { Component } from '@angular/core';
import { FormLoginComponent } from '../../components/form-login/form-login.component';
import { SliderComponent } from '../../components/slider/slider.component';

@Component({
  selector: 'app-login-container',
  standalone: true,
  imports: [
    FormLoginComponent,
    SliderComponent
  ],
  templateUrl: './login-container.component.html',
  styleUrl: './login-container.component.scss'
})
export class LoginContainerComponent {

}
