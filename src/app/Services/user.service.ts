import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iuser } from '../Models/iuser';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userURL:string = `${environment.baseURL}/Users`

  constructor(private HTTPClient: HttpClient) { }

  addUser(newUser:Iuser):Observable<Iuser>{
    return this.HTTPClient.post<Iuser>(this.userURL, newUser, {
      headers:{
        'content-type': 'application/json'
      }
    })
  }
  getUsers():Observable<Iuser[]>{
    return this.HTTPClient.get<Iuser[]>(this.userURL,{
      headers:{
        'content-type': 'application/json'
      }
    })
  }

}
