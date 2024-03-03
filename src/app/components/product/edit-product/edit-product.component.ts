import { Component } from '@angular/core';
import { Product } from '../../../interfaces/interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../services/product/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent {
  product: Product = {
    id: '',
    title: '',
    picture: '',
    gender: '',
    price: '',
    brand: ''
  };
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _productService: ProductService,

  ) { }

  ngOnInit(): void {
    const productId = String(this._route.snapshot.paramMap.get('id'))
    this._productService.getProductByIdAsync(productId).subscribe((product: Product) => {
      this.product = product;
    });
  }

  updateProduct(): void {
    this._productService.updateProductAsync(this.product).subscribe(() => {
      this._router.navigate(['/products']);
      }
    );
  }
}
