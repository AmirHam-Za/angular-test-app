import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../../interfaces/interfaces';
import { ProductService } from '../../../services/product/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: Product[] = [];
  
  constructor(
    private _userService: ProductService,
    private _router: Router
    
    ) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts() {
    this._userService.getProductsAsync().subscribe((data: Product[]) => {
      this.products = data
      console.log('product:', data)
    })
  }

    deleteProductById(id:string){
      this._userService.deleteProductByIdAsync(id).subscribe((res:Product)=>{
        console.log(res)
        this.getProducts()
      })
    }

    editProductById(userId: string): void {
      this._router.navigate(['/products', userId, 'edit']);
    }
}
