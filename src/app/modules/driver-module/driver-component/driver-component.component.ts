import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-driver-component',
  templateUrl: './driver-component.component.html',
  styleUrls: ['./driver-component.component.css'],
})
export class DriverComponentComponent {
  constructor(private formBuilder: FormBuilder) {}

  public parentForm = this.formBuilder.group({
    lastName: ['', [Validators.required]],
    firstName: ['', []],
    middleName: ['', []],
    birthday: ['', []],
    foreigner: ['', []],
    driverLicence: ['', []],
    startExpDate: ['', []],
    oldDriverLicence: ['', []],
    isInsured: ['', []],
  });

}
