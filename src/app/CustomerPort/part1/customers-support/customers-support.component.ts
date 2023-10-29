import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-customers-support',
  templateUrl: './customers-support.component.html',
  styleUrls: ['./customers-support.component.css']
})
export class CustomersSupportComponent implements OnInit {
  constructor(private spinner: NgxSpinnerService) {}
  ngOnInit(){
/** spinner starts on init */
this.spinner.show();

setTimeout(() => {
  /** spinner ends after 5 seconds */
  this.spinner.hide();
},2000);

  }

}
