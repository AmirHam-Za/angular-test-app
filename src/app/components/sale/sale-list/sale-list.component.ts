import { Component } from '@angular/core';
import { Sale } from '../../../interfaces/interfaces';
import { Router } from '@angular/router';
import { SaleService } from '../../../services/sale/sale.service';

@Component({
  selector: 'app-sale-list',
  templateUrl: './sale-list.component.html',
  styleUrl: './sale-list.component.css'
})
export class SaleListComponent {
  sales: Sale[] = [];
  
  constructor(
    private _userService: SaleService,
    private _router: Router
    
    ) { }

  ngOnInit(): void {
    this.getSales()
  }

  getSales() {
    this._userService.getSalesAsync().subscribe((data: Sale[]) => {
      this.sales = data
      console.log('sales:', data)
    })
  }

    deleteSaleById(id:string){
      this._userService.deleteSaleByIdAsync(id).subscribe((res:Sale)=>{
        console.log(res)
        this.getSales()
      })
    }

    editSaleById(userId: string): void {
      this._router.navigate(['/sales', userId, 'edit']);
    }
}
