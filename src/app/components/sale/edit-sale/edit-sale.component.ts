import { Component } from '@angular/core';
import { Sale } from '../../../interfaces/interfaces';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { SaleService } from '../../../services/sale/sale.service';

@Component({
  selector: 'app-edit-sale',
  templateUrl: './edit-sale.component.html',
  styleUrl: './edit-sale.component.css'
})
export class EditSaleComponent {
  sale: Sale = {
    id: '',
    title: '',
    products: '',
    customer_id: '',
    company: '',
    payment_method: '',
    shipping_address: '',
    total: ''
  };
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _saleService: SaleService,

  ) { }

  ngOnInit(): void {
    const saleId = String(this._route.snapshot.paramMap.get('id'))
    this._saleService.getSaleByIdAsync(saleId).subscribe((sale: Sale) => {
      this.sale = sale;
    });
  }

  updateSale(): void {
    this._saleService.updateSaleAsync(this.sale).subscribe(() => {
      this._router.navigate(['/sales']);
      }
    );
  }
}
