import { Injectable } from '@angular/core';
import {CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router/router";
import {Observable} from "rxjs/Rx";

//This make it easy for componets to connect to the Candeactivate Guard
export interface  UnsavedChangesInComponentDeActivate{
   canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()
export class UnsavedGuardService implements CanDeactivate<UnsavedChangesInComponentDeActivate>{

  constructor() { }

  canDeactivate(component:UnsavedChangesInComponentDeActivate, currentRoute:ActivatedRouteSnapshot, currentState:RouterStateSnapshot, nextState?:RouterStateSnapshot):Observable<boolean>|Promise<boolean>|boolean {
    return component.canDeactivate();
  }


}
