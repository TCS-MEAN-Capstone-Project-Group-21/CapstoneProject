import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { SendrequestComponent } from './sendrequest/sendrequest.component';
import { SignupComponent } from './signup/signup.component';
import { UnlockuserComponent } from './unlockuser/unlockuser.component';
import { UpdateorderComponent } from './updateorder/updateorder.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [{path:"", component:MainComponent},
{path:"user/:userid",component:UserComponent},
{path:"login",component:LoginComponent},
{path:"signup",component:SignupComponent},
{path:"sendrequest",component:SendrequestComponent},
{path:"updateorder",component:UpdateorderComponent},
{path:"unlockuser",component:UnlockuserComponent},
{path:"editprofile",component:EditprofileComponent},
{path:"employee",component:EmployeeComponent},
{path:"addEmployee",component:AddEmployeeComponent},
{path:"deleteEmployee",component:DeleteEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
