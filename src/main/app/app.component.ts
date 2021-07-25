import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './services/authentication.service';
import { User } from './models/user.model';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
  public user: User | undefined;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.user.subscribe(x => this.user = x);
  }

  userHome(){
    this.router.navigate(['/user'])
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
