import { Component } from '@angular/core';

@Component({
  selector: 'app-form-login',
  standalone: true,
  imports: [],
  templateUrl: './form-login.component.html',
  styleUrl: './form-login.component.scss'
})
export class FormLoginComponent {
  isPasswordVisible: boolean = false;
  forgotPassword() {
    // Implement forgot password functionality
  }

  login() {
    // Implement login functionality
  }

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }
}
