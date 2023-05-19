import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewDriverComponent } from './add-new.component';

describe('AddNewDriverComponent', () => {
  let component: AddNewDriverComponent;
  let fixture: ComponentFixture<AddNewDriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewDriverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
