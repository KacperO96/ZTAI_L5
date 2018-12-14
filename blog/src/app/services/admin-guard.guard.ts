import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import {AuthServiceService} from "./auth-service.service";

@Injectable({
  providedIn: 'root'
})
export class AdminGuardGuard implements CanActivate {
  constructor(private authService: AuthServiceService) {
  }

  canActivate() {
    if (this.authService.isLoggedIn()) {
      return true;
    }
  }

}
