import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DriverService } from 'src/app/services/driver.service';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css'],
})
export class AddNewDriverComponent {
  messageclass = '';
  message = '';
  responsedata: any;

  driverId: any;
  editdata: any;
  editMode: boolean = false;

  /**
    * Constructor
    */  
  constructor(private service: DriverService, private route: ActivatedRoute) {
    this.driverId = this.route.snapshot.paramMap.get('id');
    if (this.driverId != null) {
      console.log(this.route.snapshot.paramMap.get('id'));
      this.editMode = true;
      this.setDriverData(this.driverId);
    }
  }

  ngOnInit(): void {}

  driverForm = new FormGroup({
    id: new FormControl(0),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    phoneNumber: new FormControl('', Validators.required),
  });

  /**
    * Add or update Driver
    */  
  SaveDriver() {
    if (this.driverForm.valid) {
      debugger;
      if (this.editMode) {
        this.service.Update(this.driverForm.value).subscribe((result) => {
          if (result != null) {
            this.responsedata = result;
            if (this.responsedata.result == 'updated') {
              this.message = `Driver: ${this.responsedata.keyValue} updated successfully`;
              this.messageclass = 'text-success';
              this.editMode = false;
            } else {
              this.message = 'Failed to Save';
              this.messageclass = 'text-danger';
            }
          }
        });
      } else if (!this.editMode) {
        this.service.Add(this.driverForm.value).subscribe((result) => {
          if (result != null) {
            this.responsedata = result;
            if (this.responsedata.result == 'added') {
              this.message = `Driver: ${this.responsedata.keyValue} added successfully`;
              this.messageclass = 'text-success';
              this.resetForm();
            } else {
              this.message = 'Failed to Save';
              this.messageclass = 'text-danger';
            }
          }
        });
      }
    } else {
      this.message = 'Please enter valid data';
      this.messageclass = 'text-danger';
    }
  }

  /**
    * Reset Driver form 
    */
  resetForm() {
    this.driverForm = new FormGroup({
      id: new FormControl(0),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      phoneNumber: new FormControl(''),
    });
  }

  /**
    * Set Driver Data on driverForm to update
    */  
  setDriverData(id: any) {
    this.service.GetById(id).subscribe((data) => {
      this.editdata = data;

      this.driverForm = new FormGroup({
        id: new FormControl(this.editdata.id),
        firstName: new FormControl(this.editdata.firstName),
        lastName: new FormControl(this.editdata.lastName),
        email: new FormControl(this.editdata.email),
        phoneNumber: new FormControl(this.editdata.phoneNumber),
      });
    });
  }

  get firstName() {
    return this.driverForm.get('firstName');
  }
  get lastName() {
    return this.driverForm.get('lastName');
  }
  get email() {
    return this.driverForm.get('email');
  }
  get phoneNumber() {
    return this.driverForm.get('phoneNumber');
  }
}
