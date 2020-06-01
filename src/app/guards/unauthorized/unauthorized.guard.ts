import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanActivateChild,
  CanLoad,
  Route,
  UrlSegment,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { GlobalService } from 'src/app/services/global/global.service';

@Injectable({
  providedIn: 'root',
})
export class UnauthorizedGuard
  implements CanActivate, CanActivateChild, CanLoad {
  private isAuthorization: boolean;
  constructor(private globalService: GlobalService, private router: Router) {
    this.globalService.getAuthorization.subscribe(($) => {
      this.isAuthorization = $;
    });
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.isAuthorization) {
      this.router.navigateByUrl('/tabs/menu');
      return false;
    }

    return true;
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.isAuthorization) {
      this.router.navigateByUrl('/tabs/menu');
      return false;
    }

    return true;
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.isAuthorization) {
      this.router.navigateByUrl('/tabs/menu');
      return false;
    }

    return true;
  }
}
