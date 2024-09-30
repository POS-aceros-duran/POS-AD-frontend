import { Component, inject } from '@angular/core';
import { ApiService, AuthService } from '@app/services';
import { PostLogin } from '../../model/loginResponse.model';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {SessionStorageConstants, UriConstants} from '@app/utils'

@Component({
  selector: 'app-form-login',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './form-login.component.html',
  styleUrl: './form-login.component.scss',
})
export class FormLoginComponent {
  public loading = false;
  private apiService = inject(ApiService<{}, PostLogin>);
  public formGroup: FormGroup = new FormGroup({});

  constructor(private readonly fb: FormBuilder, private readonly authServise: AuthService) {

  }

  ngOnInit() {
    this.formGroup = this.fb.group({
      user: ['', [Validators.required, Validators.minLength(3)]], 
      pass: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  isPasswordVisible: boolean = false;
  forgotPassword() {
    // Implement forgot password functionality
  }

  login() {
    if (this.isFormValid()) {
      const { user, pass } = this.formGroup.value;

      this.apiService
        .postService({
          url: `${UriConstants.USER_LOGIN}`,
          data: {
            username: user,
            password: pass,
          },
        })
        .subscribe({
          next: (data) => {
            this.loading = true;
            const { token } = data.response;
            this.authServise.saveToSession(
              SessionStorageConstants.USER_TOKEN,
              token
            );

            // Decodifica el token JWT proporcionado para obtener los datos asociados del usuario.
            const tokenData = this.authServise.getTokenDataUser(token);

            // Redirige al usuario según el rol obtenido del token decodificado.
            this.authServise.redirectByRole(tokenData.role[0].authority);
          },complete: () => {
            this.loading = false;
          },
          error: (error) => {
            this.resetForm()
            console.log("error: ", error)
            // this.alertConfiguration('ERROR', error);
            // this.openAlert();
            // this.loading = false;
          },
        });
    }
  }

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  resetForm() {
    this.formGroup.reset();
  }

  isFormValid(): boolean {
    if (this.formGroup.invalid) {
      for (const control in this.formGroup.controls) {
        this.formGroup.controls[control].markAsDirty();
        this.formGroup.controls[control].markAsTouched();
      }
      return false;
    }
    return true;
  }
}
