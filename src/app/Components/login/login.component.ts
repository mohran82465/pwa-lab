import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  isLoggedin:boolean = false;

  constructor(private authService:AuthService){}

  ngOnInit(): void {
    this.isLoggedin = this.authService.isLogedin()
  }
  
  loginfun(){
    this.authService.login()
    this.isLoggedin = this.authService.isLogedin()
  }
  
  logoutfun(){
    this.authService.logout()
    this.isLoggedin = this.authService.isLogedin()
  }

}
