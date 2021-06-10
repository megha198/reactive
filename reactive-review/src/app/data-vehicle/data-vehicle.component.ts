import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-data-vehicle',
  templateUrl: './data-vehicle.component.html',
  styleUrls: ['./data-vehicle.component.css']
})
export class DataVehicleComponent implements OnInit {
     
  constructor( private service:UserService) { }
  vehicledata:any=[]

  ngOnInit(): void {
    this.service.getData().subscribe(data => {
      console.log(data);
      this.vehicledata=data;
    })
  
  }
}
