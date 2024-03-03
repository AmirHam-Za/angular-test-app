import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_ENDPOINT } from '../../constant';
import { Customer } from '../../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(
    private _http: HttpClient,
  ) { }

  getCustomerByIdAsync(id: string): Observable<Customer> {
    return this._http.get<Customer>(`${API_ENDPOINT}/customers/${id}`)
  }

  getCustomersAsync(): Observable<Customer[]> {
    return this._http.get<Customer[]>(`${API_ENDPOINT}/customers`)
  }

  deleteCustomerByIdAsync(id: string): Observable<Customer> {
    return this._http.delete<Customer>(`${API_ENDPOINT}/customers/${id}`)
  }
  updateCustomerAsync(customer: Customer): Observable<Customer> {
    return this._http.put<Customer>(`${API_ENDPOINT}/customers/${customer.id}`, customer);
  }
}
