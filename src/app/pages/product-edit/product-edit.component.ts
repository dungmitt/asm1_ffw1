import { Component } from '@angular/core';
import { Iproduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent {
  product :Iproduct ={
    name:"",
    price: 0
  }
  constructor(
    private productService:ProductService,
    private router : ActivatedRoute){
      this.router.paramMap.subscribe(params =>{
        const id = Number(params.get('id'));
        this.productService.getProductById(id).subscribe(product =>{
          this.product = product;
        })
      })
    }
  onHandleSubmit(){
    this.productService.updateProduct(this.product).subscribe(product =>{
      console.log(product);
      this.product.price = parseFloat(this.product.price)
    });
  }
}
