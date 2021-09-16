import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FundsComponent } from './user/funds/funds/funds.component';
import { OrderStatusComponent } from './user/order-status/order-status/order-status.component';
import { EditProfileComponent } from './user/edit-profile/edit-profile/edit-profile.component';
import { SignInComponent } from './Employee/sign-in/sign-in.component';

@NgModule({
  declarations: [
    AppComponent,
    FundsComponent,
    OrderStatusComponent,
    EditProfileComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
