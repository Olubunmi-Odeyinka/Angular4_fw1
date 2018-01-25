import { Injectable } from '@angular/core';
import {DataAccessService} from "./data-access.service";

@Injectable()
export class AuthService {

  //loggedIn = false;

  constructor(private serverAccsee :DataAccessService ) { }

  // isAuthenticated(){
  //  const promise = new Promise(
  //    (resolve, reject) => {
  //      setTimeout(() => {
  //        resolve(this.loggedIn);
  //       }, 200 );
  //    }
  //  )
  //   return promise;
  // }

  logIn(email: string, password: string){

    this.serverAccsee.postItemtoServer('/users/login', {email: email, password: password});
    localStorage.setItem('currentUser', JSON.stringify({ username: email, token: 'xxx' }));
    //this.loggedIn = true;
  }

  logOut(){
    // clear token remove user from local storage to log user out
    //this.loggedIn = false;

    this.serverAccsee.deleteItemOnServer('users/me/token');
    localStorage.removeItem('currentUser');
    //'DELETE /users/me/token'
  }
}
