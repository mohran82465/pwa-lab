import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Icategory } from '../Models/icategory';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private HTTPClient: HttpClient) { }

  getAllCategories():Observable<Icategory[]>{
    return this.HTTPClient.get<Icategory[]>(`${environment.baseURL}/Categories`)
  }


}
