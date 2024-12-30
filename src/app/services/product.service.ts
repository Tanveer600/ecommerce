import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from './Constants/Constant';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
private apiurl='https://localhost:7213/api/Product/'
private  apiurlcategory='https://localhost:7213/api/Category/'
  constructor(private http:HttpClient) { }


  GetAllProduct(){
    debugger;
   return this.http.get(this.apiurl + 'GetAll');
  }

  createProduct(obj:any){
    debugger;
   return this.http.post(this.apiurl,obj);
  }
  GetAllCategory(){
    debugger;
   return this.http.get(this.apiurlcategory + 'GetAll');
  }
}
