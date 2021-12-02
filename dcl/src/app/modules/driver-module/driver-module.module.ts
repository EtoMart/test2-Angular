import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriverComponentComponent } from './driver-component/driver-component.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DriverComponentComponent],
  exports: [DriverComponentComponent],
  imports: [CommonModule, BrowserModule, FormsModule, ReactiveFormsModule],
})
export class DriverModuleModule {}
