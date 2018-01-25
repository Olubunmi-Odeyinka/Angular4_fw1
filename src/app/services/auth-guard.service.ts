import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild} from "@angular/router";
import {Observable} from "rxjs/Rx";
import {AuthService} from "./auth.service";

@Injectable()
export class AuthGuardService implements CanActivate
  , CanActivateChild
{


  constructor(private authService: AuthService, private router : Router) { }

  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<boolean>|Promise<boolean>|boolean {
    // return this.authService.isAuthenticated()
    //   .then(
    //     (authenticated: boolean) =>{
    //       if(authenticated){
    //         return true;
    //       }else {
    //         this.router.navigate(['/']);
    //       }
    //     }
    //   );

    if (localStorage.getItem('currentUser')) {
      // logged in so return true
      return true;
    }

    // not logged in so redirect to login page
    this.router.navigate(['/login']);
    return false;
  }

  canActivateChild(childRoute:ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<boolean>|Promise<boolean>|boolean {
    return this.canActivate(childRoute, state);
  }
}
