import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

 
 
 
 
 
 
@Injectable({
  providedIn: 'root'
})
 
export class BackendService {
  [x: string]: any;
  baseURL:string='https://localhost:7085/';
  //baseURL:string="";
  //baseURL:string="";
  loaclConfig:string="";
  TestConfig:string=""; //stage , test , demo , beta
  ProductionConfig:string=""; //production ,live, alive , global

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http:HttpClient) { }
  AddCustomer(object:any){
    debugger
  return  this.http.post(this.baseURL+"api/ConfigurationsManagement/CreateUser",object ,this.httpOptions).pipe(retry(1), catchError(this.handleError));
  }

}

