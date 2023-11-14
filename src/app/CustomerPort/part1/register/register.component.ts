import { Component, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BackendService } from '../backend.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  encapsulation: ViewEncapsulation.None,

})
export class RegisterComponent {
[x: string]: any;
	
	
	closeResult!: string;

	openScrollableContent(longContent: any) {
		this.modalService.open(longContent, { scrollable: true });}


	constructor(private spinner: NgxSpinnerService,private modalService: NgbModal, private backend:BackendService ,private router: Router, private toastrService:ToastrService) {}
	ngOnInit() {

		
	}
	
	fname: string = "";
	lname: string = "";
	addrss: string = "";
	phone : string ="";
	//gender: boolean =false;
	email: string ="";
	password: string="";
	username: string="";

	
	Register(){
		const Requestreister ={
			"fname" : this.fname,
			"lname": this.lname,
			"username": this.username,
			"email": this.email,
			"addrss": this.addrss,
			"password": this.password,
			"phone": this.phone,
			//"gender":this.gender,
		}
		
		this.backend.AddCustomer(Requestreister).subscribe((res) => {
			debugger
			//console.log(res)
			let obj = JSON.parse(JSON.stringify(res))
			debugger
			console.log(obj)
			//console.log(obj.response.username)
	  
			//console.log(obj)
			//console.log(obj.response.username)

	   
		  })
		  this.router.navigate(["/login"])

		  /*if(this.obj.RegisterComponent== 200){
			this.toastrService.success("Welcom in Store")
			this.router.navigate(["/login"])
	 
		  }
		  else{
			  this.toastrService.error('Please Register','Major Error',{timeOut : 300 });
		  }*/
		 
	}	
}
