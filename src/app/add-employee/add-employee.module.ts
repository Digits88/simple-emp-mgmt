import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddEmployeeComponent } from './add-employee.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [AddEmployeeComponent],
  exports:[AddEmployeeComponent]
})
export class AddEmployeeModule { }
