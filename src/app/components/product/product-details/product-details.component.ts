import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../interfaces/interfaces';
import { ProductService } from '../../../services/product/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  product: Product={
    id: '',
    title: '',
    price: '',
    picture: '',
    brand: '',
    gender: ''
  }
  
  constructor(
    private _route: ActivatedRoute,
    private _productService: ProductService,
  ){}
    ngOnInit(): void {
      const productIdFromRoute = String(this._route.snapshot.paramMap.get('id'))
      
      this._productService.getProductByIdAsync(productIdFromRoute).subscribe((res:Product)=>{
        this.product = res
        console.log(res)
      })
    }
}
