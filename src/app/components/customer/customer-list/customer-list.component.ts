import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../../../interfaces/interfaces';
import { CustomerService } from '../../../services/customer/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent {
  customers: Customer[] = [];
  
  constructor(
    private _customerService: CustomerService,
    private _router: Router
    
    ) { }

  ngOnInit(): void {
    this.getCustomers()
  }

  getCustomers() {
    this._customerService.getCustomersAsync().subscribe((data: Customer[]) => {
      this.customers = data
      console.log('customers:', data)
    })
  }

    deleteCustomerById(id:string){
      this._customerService.deleteCustomerByIdAsync(id).subscribe((res:Customer)=>{
        console.log(res)
        this.getCustomers()
      })
    }

    editCustomerById(customerId: string): void {
      this._router.navigate(['/customers', customerId, 'edit']);
    }
}
