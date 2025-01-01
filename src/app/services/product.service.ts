import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from './Constants/Constant';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

private apiurl='https://localhost:7077/api/products/'
  constructor(private http:HttpClient) { }


  GetAllProduct(){
    debugger;
   return this.http.get(this.apiurl);
  };

  createProduct(obj:any){
    debugger;
   return this.http.post(this.apiurl,obj);
  }
 
}
