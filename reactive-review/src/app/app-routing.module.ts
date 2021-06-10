import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataVehicleComponent } from './data-vehicle/data-vehicle.component';
import { VehicleFormComponent } from './vehicle-form/vehicle-form.component';


const routes: Routes = [
  {path:"",component:VehicleFormComponent},
  {path :"getvehicle",component:DataVehicleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
