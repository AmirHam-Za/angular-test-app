import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../../../interfaces/interfaces';
import { CustomerService } from '../../../services/customer/customer.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrl: './edit-customer.component.css'
})
export class EditCustomerComponent {
  customer: Customer = {
    id: '',
    first_name: '',
    last_name: '',
    picture: '',
    age: '',
    gender: '',
    email: '',
    phone: '',
  };
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _http: HttpClient,
    private _customerService: CustomerService,

  ) { }

  ngOnInit(): void {
    const customerId = String(this._route.snapshot.paramMap.get('id'))
    this._customerService.getCustomerByIdAsync(customerId).subscribe((customer: Customer) => {
      this.customer = customer;
    });
  }

  updateCustomer(): void {
    this._customerService.updateCustomerAsync(this.customer).subscribe(() => {
      this._router.navigate(['/customers']);
      }
    );
  }

}
