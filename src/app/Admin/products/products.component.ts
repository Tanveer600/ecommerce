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
productlist:any[]=[];
categorylist:any[]=[];
productobj: any = {
  productid: 0,
  productsku: "",
  productname: "",
  productprice: 0,
  productshortname: "",
  productdescription: "",
  createddate: new Date().toISOString(), // Assign date directly
  develerytimespan: "",
  categoryid: 0,
  productimageurl: ""
};

ngOnInit(): void {
this.getproduct();

}
getproduct(){
  debugger;
  this.productservice.GetAllProduct().subscribe((res:any)=>{
this.productlist=res;
console.info("this.productlist",this.productlist);
  });
}
onImageError(event: Event) {
  console.error('Image not found:', event);
}




// [(ngModel)]="productobj."
opensidepanel(){
  this.issidepanelvisible=true;
}
closesidepanel(){
  this.issidepanelvisible=false;
}

Onsave(){
  debugger;
  this.productservice.createProduct(this.productobj).subscribe(
    (res: any) => {
      alert('Product added successfully');
    },
    (error) => {
      console.error('Error adding product:', error);
      alert('Failed to add product. Please check logs for more details.');
    }
  );
  
}
}
