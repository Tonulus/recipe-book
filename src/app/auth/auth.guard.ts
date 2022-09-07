import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { map, take } from "rxjs/operators";
import { AuthService } from "./auth.service";

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {}
    
    canActivate(
        route: ActivatedRouteSnapshot,
        router: RouterStateSnapshot
    ): boolean | Promise<boolean> | Observable<boolean | UrlTree> {
        //We cannot simply return this.authService.user althoug user is Observable.
        //But user isn't Observable with boolean, so we have to tranform it
        ///to boolean by map()
        return this.authService.user.pipe(
            //take(1) is added because because the guard keeps listening to SUbject which can lead 
            //to strange efects. Instead of that we want to look into user value just once and then unsubscribe.
            take(1),
            map(user => {
                //return !!user;  //convert Object value to boolean
                const isAuth = !!user;
                if (isAuth) {
                    //return true if you want to grand the access
                    return true;
                }
                //return urlTree instead of false if the user isn't authenticated
                return this.router.createUrlTree(['/auth']);
            })
        );
    }
}


