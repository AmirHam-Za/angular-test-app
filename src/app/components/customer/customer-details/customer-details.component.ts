import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from '../../../interfaces/interfaces';
import { CustomerService } from '../../../services/customer/customer.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrl: './customer-details.component.css'
})
export class CustomerDetailsComponent {
  customer: Customer={
    id: '',
    first_name: '',
    last_name: '',
    picture: '',
    age: '',
    gender: '',
    email: '',
    phone: '',
  }
  
  
  constructor(
    private _route: ActivatedRoute,
    private _customerService: CustomerService,
  ){}
    ngOnInit(): void {
      const customerIdFromRoute = String(this._route.snapshot.paramMap.get('id'))
      
      this._customerService.getCustomerByIdAsync(customerIdFromRoute).subscribe((res:Customer)=>{
        this.customer = res
        console.log(res)
      })
    }
}
