import { Component } from '@angular/core';
import { Iproduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent {
  product:Iproduct[] = []
  constructor(private productService:ProductService){
    this.productService.getProduct().subscribe(data=>{
      this.product = data
    })
  }
  removeProduct(id:any){
    this.productService.deleteProduct(id).subscribe(()=>{
      this.product = this.product.filter(item=>item.id!=id)
    })
  }
}
