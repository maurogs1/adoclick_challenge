import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import * as particlesJS from 'particles.js';
import { InputValidator } from '../../interfaces/index';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loading = false;

  emailValidations: InputValidator[] = [
    { name: 'required', message: 'Email is required' },
    { name: 'email', message: 'Invalid email format' },
  ];

  passwordValidations: InputValidator[] = [
    { name: 'required', message: 'Password is required.' },
    { name: 'minlength', message: 'Password must have at least 6 characters.' },
  ];

  errorUsernamePassworMessage = '';

  ngOnInit() {}
  constructor(private authService: AuthService, private router: Router) {
    this.loginFormBuilder();
  }

  loginFormBuilder() {
    const fb = new FormBuilder();
    this.loginForm = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.min(6)]],
    });
  }

  async login() {
    const { email, password } = this.loginForm.value;
    this.errorUsernamePassworMessage = '';
    this.loading = true;

    this.authService.login(email, password).then((res) => {
      if(res === true)
        this.router.navigate(['/shopping']);
      else
        this.errorUsernamePassworMessage = 'Invalid username or password';
      this.loading = false;
    },
    () => {this.loading = false;}
    );
  }
}
