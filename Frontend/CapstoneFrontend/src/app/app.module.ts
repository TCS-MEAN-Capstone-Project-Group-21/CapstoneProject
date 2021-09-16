import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RaiseticketComponent } from './raiseticket/raiseticket.component';
import { SelectitemsComponent } from './selectitems/selectitems.component';
import { ViewitemsComponent } from './viewitems/viewitems.component';
import { DeleteitemsComponent } from './deleteitems/deleteitems.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { GenerateRepotsComponent } from './generate-repots/generate-repots.component';
import { EmployeeComponent } from './employee/employee.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { SendrequestComponent } from './sendrequest/sendrequest.component';
import { UnlockuserComponent } from './unlockuser/unlockuser.component';
import { UpdateorderComponent } from './updateorder/updateorder.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    UserComponent,
    LoginComponent,
    SignupComponent,
    RaiseticketComponent,
    SelectitemsComponent,
    ViewitemsComponent,
    DeleteitemsComponent,
    CheckoutComponent,
    AddEmployeeComponent,
    DeleteEmployeeComponent,
    GenerateRepotsComponent,
    EmployeeComponent,
    EditprofileComponent,
    SendrequestComponent,
    UnlockuserComponent,
    UpdateorderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
