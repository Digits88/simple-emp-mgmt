import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Employee } from 'app/models/employee';
import { EmployeeService } from 'app/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  @Output() employeeAdded = new EventEmitter();
 
  newEmployee: Employee;
  
  constructor(private empService: EmployeeService) { }

  ngOnInit() {
    this.newEmployee = new Employee();
  }

  addEmployee() {
    this.empService.addEmployee(this.newEmployee);
    
    this.newEmployee = new Employee();

    console.log(JSON.stringify(this.newEmployee));

    this.employeeAdded.emit();
  }
}
