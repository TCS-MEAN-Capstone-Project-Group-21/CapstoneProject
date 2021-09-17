import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminComponent } from './admin/admin.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { DeleteProductsComponent } from './delete-products/delete-products.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { EmployeeComponent } from './employee/employee.component';
import { GenerateReportsComponent } from './generate-reports/generate-reports.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { SendrequestComponent } from './sendrequest/sendrequest.component';
import { SignupComponent } from './signup/signup.component';
import { UnlockuserComponent } from './unlockuser/unlockuser.component';
import { UpdateorderComponent } from './updateorder/updateorder.component';
import { UserComponent } from './user/user.component';
import { ViewitemsComponent } from './viewitems/viewitems.component';
import { UpdateProductsComponent } from './update-products/update-products.component';

const routes: Routes = [{path:"", component:MainComponent},
{path:"user/:userid",component:UserComponent},
{path:"admin",component:AdminLoginComponent},
{path:"addProduct",component:AddProductsComponent},
{path:"adminLoggedIn",component:AdminComponent},
{path:"login",component:LoginComponent},
{path:"signup",component:SignupComponent},
{path:"deleteProduct",component:DeleteProductsComponent},
{path:"sendrequest",component:SendrequestComponent},
{path:"updateorder",component:UpdateorderComponent},
{path:"unlockuser",component:UnlockuserComponent},
{path:"cart",component:ViewitemsComponent},
{path:"editprofile/:empid",component:EditprofileComponent},
{path:"employee",component:EmployeeComponent},
{path:"addEmployee",component:AddEmployeeComponent},
{path:"deleteEmployee",component:DeleteEmployeeComponent},
{path:"adminReport",component:GenerateReportsComponent},
{path:"updateProduct",component:UpdateProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
