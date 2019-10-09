import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminInventoryComponent } from './admin/admin-inventory/admin-inventory.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    InventoryComponent,
    ShoppingcartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminInventoryComponent,
    AdminOrdersComponent,
    LoginComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent },
      {path: 'inventory', component: InventoryComponent },
      {path: 'shoppingcart', component: ShoppingcartComponent },
      {path: 'check-out', component: CheckOutComponent },
      {path: 'order-success', component: OrderSuccessComponent},
      {path: 'my-orders', component: MyOrdersComponent },
      {path: 'login', component: LoginComponent },
      {path: 'admin/inventory', component: AdminInventoryComponent },
      {path: 'admin/orders', component: AdminOrdersComponent }
  ])
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
