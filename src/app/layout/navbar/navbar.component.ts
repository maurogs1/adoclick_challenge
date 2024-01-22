import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isLogged = false;
  constructor (private authService: AuthService, private router: Router){

  }

  ngOnInit(): void {
    this.isLogged = this.authService.isLogged();
    console.log(this.isLogged)
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);

  }
  goToLogin(): void {
    this.router.navigate(['/login']);
  }
  



}
