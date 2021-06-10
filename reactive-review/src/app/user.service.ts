import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{HttpClient} from '@angular/common/http';
import {postvehicle} from './vehicle-form/vehicle'; 

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  

  getData():Observable<any>{
    return this.http.get("https://60bf32f197295a0017c4212e.mockapi.io/api/v1/vehicles");
  }
  PostData(data:any):Observable<any>{
    return this.http.post("https://60bf32f197295a0017c4212e.mockapi.io/api/v1/vehicles",data);
  }
}
