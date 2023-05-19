import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { DriverService } from 'src/app/services/driver.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css'],
})
export class ListingComponent {
  constructor(private service: DriverService, private router: Router) {}

  @ViewChild('content') popupview!: ElementRef;

  driversList: any;
  alphabetizedDriverId: string | undefined;
  alertmessage: string = '';
  dtoptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  ngOnInit(): void {
    this.dtoptions = {
      pagingType: 'numbers',
      searching: true,
      lengthChange: false,
      language: {
        searchPlaceholder: ' Type here...',
      },
    };
    this.LoadDrivers();
  }

  /**
    * Store drivers in drivers List
    */
  LoadDrivers() {
    this.driversList = [];
    this.service.GetAll().subscribe((res) => {
      this.driversList = res;
      this.dtTrigger.next(null);
    });
  }

  /**
   * Navigate to edit form
   */
  EditDriver(driverId: any) {
    this.router.navigateByUrl('/edit/' + driverId);
  }

  /**
    * Remove driver from table
    */  
  RemoveDriver(driverId: any) {
    if (confirm('Do you want to remove this Driver ?')) {
      this.service.Remove(driverId).subscribe((res) => {
        let result: any;
        result = res;
        if (result.result == 'removed') {
          this.LoadDrivers();
        }
      });
    }
    window.location.reload();
  }

  /**
    * Save id of alphabetized user
    */
  Alphabetize(id: string) {
    this.alphabetizedDriverId = id;
  }
}
