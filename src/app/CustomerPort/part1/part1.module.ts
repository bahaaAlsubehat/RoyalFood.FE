import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { Part1RoutingModule } from './part1-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CustomersSupportComponent } from './customers-support/customers-support.component';
import { SharedModule } from "../shared/shared.module";
import { CarouselModule } from 'ngx-owl-carousel-o';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@NgModule({
    declarations: [
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        ProfilePageComponent,
        AboutUsComponent,
        CustomersSupportComponent,
    ],
    imports: [
        CommonModule,
        Part1RoutingModule,
        SharedModule,
        CarouselModule,
        MatCheckboxModule,
        HttpClientModule,
        FormsModule,

    ],

})
export class Part1Module { }
