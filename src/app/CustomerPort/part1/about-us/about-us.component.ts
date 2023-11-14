import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
    constructor(private spinner: NgxSpinnerService) {}

    imgs! : any[] 
    
    

  ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 3000);

    this.imgs = [{
      src: 'assets/img/company-logos/1.png',},
      {src: 'assets/img/company-logos/2.png'},
      {src: 'assets/img/company-logos/3.png'},
      {src: 'assets/img/company-logos/4.png'},
      {src: 'assets/img/company-logos/5.png'}
    ]

  }
  customOptions: OwlOptions = {
    loop: true,
    pullDrag: true,
    dots: false,
    autoplay:true,
    autoplaySpeed:2000,
    margin: 0,
    autoHeight:false,
    center:true,
    autoplayHoverPause:true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1170: {
        items: 3
      }
    }
  }
}
