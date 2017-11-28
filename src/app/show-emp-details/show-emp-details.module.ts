import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowEmpDetailsComponent } from './show-emp-details.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ShowEmpDetailsComponent],
  exports: [ShowEmpDetailsComponent]
})
export class ShowEmpDetailsModule { }
