import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { AddEmployeeModule } from 'app/add-employee/add-employee.module';
import { ShowEmpDetailsModule } from 'app/show-emp-details/show-emp-details.module';

@NgModule({
  imports: [
    CommonModule,
    AddEmployeeModule,
    ShowEmpDetailsModule
  ],
  declarations: [DashboardComponent],
  exports: [DashboardComponent]
})
export class DashboardModule { }
