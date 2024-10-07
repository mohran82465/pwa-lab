import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Iproduct } from '../Models/iproduct';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductsAPIService {

  URL:string = `${environment.baseURL}/Products`

  constructor(private HTTPClient:HttpClient) { }

  getAllProducts():Observable<Iproduct[]>{
    return this.HTTPClient.get<Iproduct[]>(this.URL)
  }

  getProductByID(id:string):Observable<Iproduct>{
    return this.HTTPClient.get<Iproduct>(`${this.URL}/${id}`)
  }
  
  getProductByCatID(catID:number):Observable<Iproduct[]>{
    return this.HTTPClient.get<Iproduct[]>(`${this.URL}?catId=${catID}`)
  }

  addnewProduct(prd:Iproduct):Observable<Iproduct>{
    return this.HTTPClient.post<Iproduct>(this.URL, JSON.stringify(prd), {
      headers:{
        // 'authorization': 'token-token-token',
        'content-type': 'aplication/json'
      }
    }).pipe(
      retry(2),
      catchError((err:HttpErrorResponse)=>{
        return throwError(()=>{
          return Error('error in add new product')
        })
      })
    )
  }

  updateProduct(product:Iproduct):Observable<Iproduct>{
    return this.HTTPClient.put<Iproduct>(`${this.URL}/${product.id}`, product)
  }

  deleteProduct(prdID:string):Observable<void>{
    return this.HTTPClient.delete<void>(`${this.URL}/${prdID}`)
  }

  searchProductsMaterial(material:string):Observable<Iproduct[]>{
    return this.HTTPClient.get<Iproduct[]>(`${this.URL}?Material=${material}`)
  }
}
