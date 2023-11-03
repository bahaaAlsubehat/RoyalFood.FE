import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  constructor(private spinner: NgxSpinnerService) {}

  ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    },2000);
  }
  customOptions: OwlOptions = {
    loop:true,
    margin:10,
    autoplay: true,
    pullDrag:true,
    touchDrag:true,
    nav: true,
    navText: ['<', '>'],
    responsive:{
        0:{
            items:1
        },
      },

    }
}
