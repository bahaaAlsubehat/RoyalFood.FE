import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { NgxSpinnerService } from 'ngx-spinner';
import { Backend2serviceService } from '../backend2service.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  constructor(private spinner: NgxSpinnerService, private backend: Backend2serviceService) {}
 
  

  itemss : any = [];
  // pagedItems: any[] = []; // Paged items to display
  PageSize: number = 3; // Number of items to display per page 
  PageNumber: number = 1; // Current page
  // totalitems: number=0;

 // Calculate total number of pages
  /*get totalItems(): number {
  return this.itemss.length;
  }*/

  ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();


    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    },2000);
    this.loaditems(this.PageSize, this.PageNumber);
  }



  customOptions: OwlOptions = {
    loop:true,
    margin:10,
    autoplay: true,
    pullDrag:true,
    touchDrag:true,
    nav: true,
    //snavText: ['<', '>'],
    responsive:{
        0:{
            items:1
        },
      },
    }

    loaditems(pagesize: number, pagenumber: number){
      // debugger
      return this.backend.getItems(999,pagenumber).subscribe((data => {
        this.itemss = data;
        console.log(data);
      }))
    }

    // Update paged items when the page changes
  pageChanged(event: any): void {
    this.PageNumber = event;
    console.log(event);
    console.log(this.PageNumber);
    // this.updatePagedItems();
    // this.loaditems(this.PageSize, this.PageNumber);

  }
  
  // // Update pagedItems based on current page and pageSize
  //   updatePagedItems(): void {
  //     const startIndex = (this.PageNumber - 1) * this.PageSize;
  //     const endIndex = startIndex + this.PageSize;
  //     this.pagedItems = this.itemss.slice(startIndex, endIndex);
  //     this.loaditems(this.PageSize, this.PageNumber);
  //   }
    

}
