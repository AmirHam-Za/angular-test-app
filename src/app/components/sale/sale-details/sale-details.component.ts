import { Component } from '@angular/core';
import { Sale } from '../../../interfaces/interfaces';
import { ActivatedRoute } from '@angular/router';
import { SaleService } from '../../../services/sale/sale.service';

@Component({
  selector: 'app-sale-details',
  templateUrl: './sale-details.component.html',
  styleUrl: './sale-details.component.css'
})
export class SaleDetailsComponent {
  sale: Sale={
    id: '',
    title: '',
    customer_id: '',
    products: '',
    total: '',
    payment_method: '',
    company: '',
    shipping_address: ''
  }
  
  constructor(
    private _route: ActivatedRoute,
    private _saleService: SaleService,
  ){}
    ngOnInit(): void {
      const saleIdFromRoute = String(this._route.snapshot.paramMap.get('id'))
      
      this._saleService.getSaleByIdAsync(saleIdFromRoute).subscribe((res:Sale)=>{
        this.sale = res
        console.log(res)
      })
    }
}
