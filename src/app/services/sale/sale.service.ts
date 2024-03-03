import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_ENDPOINT } from '../../constant';
import { Sale } from '../../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class SaleService {
  constructor(
    private _http: HttpClient,
  ) { }

  getSaleByIdAsync(id: string): Observable<Sale> {
    return this._http.get<Sale>(`${API_ENDPOINT}/sales/${id}`)
  }

  getSalesAsync(): Observable<Sale[]> {
    return this._http.get<Sale[]>(`${API_ENDPOINT}/sales`)
  }

  deleteSaleByIdAsync(id: string): Observable<Sale> {
    return this._http.delete<Sale>(`${API_ENDPOINT}/sales/${id}`)
  }
  updateSaleAsync(sale: Sale): Observable<Sale> {
    return this._http.put<Sale>(`${API_ENDPOINT}/sales/${sale.id}`, sale);
  }
}
