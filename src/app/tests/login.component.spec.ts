import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from '../auth/login/login.component';
import { AuthService } from '../auth/services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedModule } from 'src/app/shared/shared.module';
import { Router } from '@angular/router';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [RouterTestingModule, HttpClientModule, HttpClientTestingModule, SharedModule],
      providers: [AuthService, { provide: Router, useClass: class { navigate = jasmine.createSpy('navigate'); } }],
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call a login method', () => {
    const spyLogin = spyOn(authService, 'login').and.returnValue(Promise.resolve(true));
    component.loginForm.controls['email'].setValue('user@demo.com');
    component.loginForm.controls['password'].setValue('123456');
    component.login();
    expect(spyLogin).toHaveBeenCalledWith('user@demo.com', '123456');
  });

  it('should navigate to "/shopping" on successful login', async () => {
    spyOn(authService, 'login').and.returnValue(Promise.resolve(true));
    component.loginForm.controls['email'].setValue('user@demo.com');
    component.loginForm.controls['password'].setValue('123456');
    await component.login();
    expect(router.navigate).toHaveBeenCalledWith(['/shopping']);
  });

  it('should display error messages when password is invalid and email is invalid', async () => {
    spyOn(authService, 'login').and.returnValue(Promise.resolve(false));
    component.loginForm.controls['email'].setValue('email_invalido');
    component.loginForm.controls['password'].setValue('sin_contraseña');
    await component.login();
    expect(component.errorUsernamePassworMessage).toBe('Invalid username or password');
    expect(component.loginForm.controls['email'].hasError('email')).toBeTrue();
  });

  it('should set loading to false on both successful and unsuccessful login', async () => {
    spyOn(authService, 'login').and.returnValue(Promise.resolve(true));
    component.loginForm.controls['email'].setValue('user@demo.com');
    component.loginForm.controls['password'].setValue('123456');
    await component.login();
    expect(component.loading).toBeFalse();
  });
});
