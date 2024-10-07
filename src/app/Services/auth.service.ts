import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedStatus:BehaviorSubject<boolean>

  constructor() {
    this.isLoggedStatus = new BehaviorSubject<boolean>(this.isLogedin());
  }

  login(){
    let token = 'dklfjdsdf';
    localStorage.setItem('token', token)
    this.isLoggedStatus.next(true)
  }
  
  logout(){
    localStorage.removeItem('token')
    this.isLoggedStatus.next(false)
  }

  isLogedin():boolean{
    return localStorage.getItem('token')? true: false;
  }

  getLoggedStatus():BehaviorSubject<boolean>{
    return this.isLoggedStatus;
  }

}
