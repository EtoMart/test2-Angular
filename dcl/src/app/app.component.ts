import { Component, ViewChild } from '@angular/core';
import { DriverComponentComponent } from './modules/driver-module/driver-component/driver-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor() {
  }

  @ViewChild(DriverComponentComponent, {static: true})
  public driverComponent: DriverComponentComponent | undefined;

  public submit(): void {
    console.log('form submitted ', this.driverComponent?.parentForm);
    const formData = { ...this.driverComponent?.parentForm.value };
    console.log('Form value:', formData);
  }
}
