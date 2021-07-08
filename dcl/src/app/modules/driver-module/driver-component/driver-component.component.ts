import { Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-driver-component',
  templateUrl: './driver-component.component.html',
  styleUrls: ['./driver-component.component.css'],
})

export class DriverComponentComponent {
  @Input('group')
  public adressForm: FormGroup;

}
