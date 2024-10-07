import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Services/user.service';
import { Iuser } from '../../Models/iuser';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit{

  users:Iuser[] = []

  constructor(private userService: UserService){}
  
  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: (result)=>{
        // console.log(result)
        this.users.push(...result)
        console.log(this.users)
      }
    })
  }

  

  // addNewUser(){
  //   let u:Iuser = {
  //     name: 'ali',
  //     email: 'ali@gmail.com',
  //     // age: 22
  //   }
  //   this.userService.addUser(u).subscribe((result)=>{
  //     console.log(result)
  //   })
  // }

  allUsers(){
    // this.userService.getUsers().subscribe({
    //   next: (result)=>{
    //     // console.log(result)
    //     this.users.push(...result)
    //     console.log(this.users)
    //   }
    // })
  }

}
