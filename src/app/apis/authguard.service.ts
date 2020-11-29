import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  constructor(private router:Router) { }
  canActivate() {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return this.router.navigateByUrl('/login');
    }
  }
}
