import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import store from '../redux/store';
import { NotifyService } from './notify.service';

// ng g guard services/auth

@Injectable({
    //זה אומר שהסרביס הזה הוא ברמה הגלובלית
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    public constructor(private notify: NotifyService, private router: Router) {}

    // This function invoked whenever user tries to enter a route required to be logged-in
    // This function should return true if the user is actually logged in, or false if he isn't logged in:
    canActivate(): boolean {

        if(store.getState().authState.token) {
            return true;
        }

        this.notify.error("You are not logged in!");
        this.router.navigateByUrl("/login");
        return false;
    }

    // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //     return true;
    // }

}