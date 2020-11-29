import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardGuard implements CanActivate {
  constructor( private router: Router) {}
  canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot) {
    let usr = localStorage.getItem('user');
    let user = JSON.parse(usr);
    if(!user || !user.type ){
      return this.router.navigateByUrl('/agri/');
    }else if( user.type == "admin"){
      return true;
    }
    return this.router.navigateByUrl('/agri/');
  }
  
}
