import { Component } from '@angular/core';
import { ResolveEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'adoclick_challenge';
  router_url: string = '';
  
  constructor( private router: Router){

    this.router?.events?.subscribe((routerData: any) => {
              if(routerData instanceof ResolveEnd){ 
                  this.router_url = routerData.url;     
              } 
    });
  }
        
  
}
