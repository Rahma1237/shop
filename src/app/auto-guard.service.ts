import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AutoGuardService implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}
  canActivate(
    router: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean | Promise<boolean> {
    if (this.auth.isConnected.getValue()) {
      return true;
    } else {
      return this.router.navigate(['/connexion']);
    }
  }
}
