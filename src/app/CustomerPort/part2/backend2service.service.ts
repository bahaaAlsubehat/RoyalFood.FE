import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Backend2serviceService {

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
  
  getItems(pagesize: number, pagenumber: number):Observable<object>{
    const url = this.baseURL+"api/MenuManagement/GetItems" + "?PageSize="+ pagesize+ "&PageNumber=" + pagenumber
    return this.http.get(url).pipe(retry(1), catchError(this.handleError));
  }
  

}
