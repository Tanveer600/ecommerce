import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  constructor(private productservice:ProductService){}
issidepanelvisible:boolean=false;
categorylist:any[]=[];
productobj:any={
"productid":0,
"productsku":"",
"productname":"",
"productprice":0,
"productshortname":"",
"productdescription":"",
"createddate":"",
"develerytimespan":"",
"categoryid":0,
"productimageurl":"",
};
ngOnInit(): void {
  debugger;
  this.productservice.GetAllProduct().subscribe((res:any)=>{
this.categorylist=res.data;
console.info("this.categorylist",this.categorylist);
  });
}
// [(ngModel)]="productobj."
opensidepanel(){
  this.issidepanelvisible=true;
}
closesidepanel(){
  this.issidepanelvisible=false;
}
}
