import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DriverComponentComponent } from './modules/driver-module/driver-component/driver-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor() {
  }

  form: FormGroup;
  @ViewChild(DriverComponentComponent)
  public driverComponent: DriverComponentComponent;

  submit(): void {
    console.log('form submitted ', this.form);
    const formData = { ...this.form.value };
    console.log('Form value:', formData);
  }
}
