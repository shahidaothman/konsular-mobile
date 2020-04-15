import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UtilService } from '../providers/util.service';
import { FirebaseService } from '../providers/firebase.service';


@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private util: UtilService,
        private auth: FirebaseService
    ) { }
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        const uid = localStorage.getItem('uid');
        console.log('uid', localStorage.getItem('uid'));
        if (uid && uid != null && uid != 'null') {
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/firebase-auth']);
        this.util.showToast('Unauthorized', 'danger', 'bottom');
        return false;
    }
}
