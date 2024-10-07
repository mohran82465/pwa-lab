import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserService } from '../../Services/user.service';
import { Iuser } from '../../Models/iuser';

@Component({
  selector: 'app-user-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './user-reactive-form.component.html',
  styleUrl: './user-reactive-form.component.css'
})
export class UserReactiveFormComponent {

  user:Iuser={} as Iuser;

  userForm: FormGroup;
  constructor(private userService:UserService , private fb:FormBuilder) {

    this.userForm=this.fb.group({
      firstName:['',[Validators.required,Validators.minLength(3)]],
      lastName:['',[Validators.required,Validators.maxLength(3)]],
      email:['',[Validators.required]],
      address:this.fb.array([])

    })
  }
  get firstName() {
    return this.userForm.get('firstName');
  }

  get address():FormArray{
    return this.userForm.get('address') as FormArray;
  }
  newAddress() {
    return this.fb.group({
      city:'',
      street:''
    })
  }

  addAddress(){
    this.address.push(this.newAddress());
  }

  removeAdd(i:number) {
    this.address.removeAt(i);
  }

  adding(){
    // console.log(this.userForm.value)
    this.user = {...this.userForm.value}
    // console.log(this.user)
    this.userService.addUser(this.user).subscribe({
      next: (user)=>{
        console.log(user)
      }
    })
  }

}
