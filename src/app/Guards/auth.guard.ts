import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {

  let authService = inject(AuthService)
  let router = inject(Router)

  if(authService.isLogedin()){
    return true;
  }else{
    router.navigateByUrl('login')
    window.alert("you must login first....");
    return false;
  }

  // return true;
};
