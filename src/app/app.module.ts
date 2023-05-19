import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { DataTablesModule } from "angular-datatables";
import { ToastrModule } from 'ngx-toastr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ListingComponent } from './components/driver/listing/listing.component';
import { AddNewDriverComponent } from './components/driver/add-new/add-new.component';
import { AlphabetizePipe } from './pipes/alphabetize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListingComponent,
    AddNewDriverComponent,
    AlphabetizePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DataTablesModule,
    ToastrModule.forRoot(),
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
