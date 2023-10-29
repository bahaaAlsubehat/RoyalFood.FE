import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CustomersSupportComponent } from './customers-support/customers-support.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';

const routes: Routes = [
{
  path: '',
  component: HomeComponent
},
{
  path: 'aboutus',
  component: AboutUsComponent
},
{
  path: 'login',
  component: LoginComponent
},
{
  path: 'register',
  component: RegisterComponent
},
{
  path: 'CustomersSupport',
  component: CustomersSupportComponent
},
{
  path: 'profilepage',
  component: ProfilePageComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Part1RoutingModule { }
