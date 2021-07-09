import {Component, ElementRef, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import {DriverComponentComponent} from './modules/driver-module/driver-component/driver-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{

constructor(private formBuilder: FormBuilder){

  this.form = formBuilder.group({
      lastName: ['', [Validators.required]],
      firstName: ['', []],
      middleName: ['', []],
      birthday: ['', []],
      foreigner: ['', []],
      driverLicence: ['', []],
      startExpDate: ['', []],
      oldDriverLicence: ['', []],
      isInsured: ['', []]
  });
}
form: FormGroup;
  @ViewChild(DriverComponentComponent)
  public driverComponent: DriverComponentComponent;


submit(){
  console.log('form submitted ' , this.form);
  const formData = {...this.form.value};
  console.log('Form value:', formData );
}

}
