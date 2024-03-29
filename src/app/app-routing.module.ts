import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EditSaleComponent } from './components/sale/edit-sale/edit-sale.component';
import { SaleListComponent } from './components/sale/sale-list/sale-list.component';
import { SaleDetailsComponent } from './components/sale/sale-details/sale-details.component';
import { EditProductComponent } from './components/product/edit-product/edit-product.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { CustomerListComponent } from './components/customer/customer-list/customer-list.component';
import { EditCustomerComponent } from './components/customer/edit-customer/edit-customer.component';
import { ProductDetailsComponent } from './components/product/product-details/product-details.component';
import { CustomerDetailsComponent } from './components/customer/customer-details/customer-details.component';

const routes: Routes = [
  {
    pathMatch: 'full',
    path: '',
    component: HomeComponent
  },

  { path: 'customers', component: CustomerListComponent },
  { path: 'customers/:id', component: CustomerDetailsComponent },
  { path: 'customers/:id/edit', component: EditCustomerComponent },
  
  { path: 'products', component: ProductListComponent },
  { path: 'products/:id', component: ProductDetailsComponent },
  { path: 'products/:id/edit', component: EditProductComponent },

  { path: 'sales', component: SaleListComponent },
  { path: 'sales/:id', component: SaleDetailsComponent },
  { path: 'sales/:id/edit', component: EditSaleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
