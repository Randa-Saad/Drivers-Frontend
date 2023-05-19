import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingComponent } from './components/driver/listing/listing.component';
import { AddNewDriverComponent } from './components/driver/add-new/add-new.component';

const routes: Routes = [
  {path:"", component:ListingComponent },
  {path:"add", component:AddNewDriverComponent},
  {path:"edit/:id", component:AddNewDriverComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
