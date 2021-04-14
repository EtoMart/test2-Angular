import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
form: FormGroup

ngOnInit(){
  this.form = new FormGroup({
    lastName: new FormControl('', [Validators.required]),
    firstName: new FormControl(''),
    middleName: new FormControl(''),
    birthday: new FormControl(''),
    foreigner: new FormControl(''),
    driverLicence: new FormControl(''),
    startExpDate: new FormControl(''),
    oldDriverLicence: new FormControl(''),
    isInsured: new FormControl(''),
  })
}

submit(){
  console.log("form submitted " , this.form)
  const formData = {...this.form.value}

  console.log("Form value:", formData )
}
}
