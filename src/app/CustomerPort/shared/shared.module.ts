import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ModalComponent } from './modal/modal.component';



@NgModule({
  declarations: [
    AlertComponent,
    HeaderComponent,
    FooterComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    NgxSpinnerModule,
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    AlertComponent,
    NgxSpinnerModule,
    ModalComponent

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class SharedModule { }
