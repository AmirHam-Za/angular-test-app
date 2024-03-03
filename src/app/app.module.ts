import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { UserDetailsComponent } from './components/user/user-details/user-details.component';
import { EditUserComponent } from './components/user/edit-user/edit-user.component';
import { FormsModule } from '@angular/forms';
import { CustomerListComponent } from './components/customer/customer-list/customer-list.component';
import { CustomerDetailsComponent } from './components/customer/customer-details/customer-details.component';
import { EditCustomerComponent } from './components/customer/edit-customer/edit-customer.component';
import { ProductDetailsComponent } from './components/product/product-details/product-details.component';
import { EditProductComponent } from './components/product/edit-product/edit-product.component';
import { SaleListComponent } from './components/sale/sale-list/sale-list.component';
import { SaleDetailsComponent } from './components/sale/sale-details/sale-details.component';
import { EditSaleComponent } from './components/sale/edit-sale/edit-sale.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDetailsComponent,
    EditUserComponent,
    CustomerListComponent,
    CustomerDetailsComponent,
    EditCustomerComponent,
    ProductDetailsComponent,
    EditProductComponent,
    SaleListComponent,
    SaleDetailsComponent,
    EditSaleComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
