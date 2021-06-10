import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../user.service';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css']
})
export class VehicleFormComponent implements OnInit {

  constructor(private router:Router,private user:UserService) { }
  vehicleform:any=new FormGroup({
     vehiclename:new FormControl( '',Validators.required),
     manufacturere:new FormControl(),
     model:new FormControl(),
     fuel:new FormControl(),
     color:new FormControl()
})
get vehiclename(){
return this.vehicleform.get('vehiclename');
}
get manufacturere(){
  return this.vehicleform.get('manufacturere');
  }
  get model(){
    return this.vehicleform.get('model');
    }
    get fuel(){
      return this.vehicleform.get('fuel');
      }
      get color(){
        return this.vehicleform.get('color');
      }
      onSubmit(){
        console.log(this.vehicleform.value);
        this.user.PostData(this.vehicleform.value).subscribe(data => 
          console.log(data));

        
        // localStorage.setItem("vehicles",JSON.stringify(this.vehicleform.value));
        // console.log("saved"+JSON.stringify(this.vehicleform.value));
         this.router.navigate(['/getvehicle'])
      }


  ngOnInit(): void {
  }

}
