import { TestBed } from '@angular/core/testing';
import { AuthService } from '../auth/services/auth.service';

describe('AuthService', () => {
  let authService: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService],
    });
    authService = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(authService).toBeTruthy();
  });

  it('should initialize "userIsLogged" as true from localstorage', () => {
    spyOn(localStorage, 'getItem').and.returnValue('true');
    authService = new AuthService();
    expect(authService.isLogged()).toBeTrue();
  });

  it('should return true and set "userIsLogged" on successful login', async () => {
    const email = 'user@demo.com';
    const password = '123456';
    const result = await authService.login(email, password);
    expect(result).toBeTrue();
    expect(authService.isLogged()).toBeTrue();
  });
  it('should return false and not set "userIsLogged" on unsuccessful login', async () => {
    const email = 'dadada@demo.com'; 
    const password = 'contraseña_invalida';
    const result = await authService.login(email, password);
    console.log(result)
    expect(result).toBeFalse();    
    expect(authService.isLogged()).toBeFalse();
  });

  it('should logout user and update userIsLogged on logout', () => {
    spyOn(localStorage, 'removeItem');
    authService.logout();
    expect(authService.isLogged()).toBeFalse();
    expect(localStorage.removeItem).toHaveBeenCalledWith('userIsLogged');
  });

  it('should return the correct token with getAuthToken', () => {
    const token = authService.getAuthToken();
    expect(token).toEqual('token-123');
  });
});
