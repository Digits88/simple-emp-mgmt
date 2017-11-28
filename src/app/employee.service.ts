import { Injectable } from '@angular/core';
import { Employee } from 'app/models/employee';

@Injectable()
export class EmployeeService {

  allEmployees: Employee[] = [];

  constructor() {
    this.createMockData();
  }

  createMockData() {
    let newEmployee = new Employee();
    newEmployee.id = 1;
    newEmployee.firstName = "Balram";
    newEmployee.lastName = "Chavan";

    this.allEmployees.push(newEmployee);

    newEmployee = new Employee();
    newEmployee.id = 2;
    newEmployee.firstName = "Balaji";
    newEmployee.lastName = "V";

    this.allEmployees.push(newEmployee);

    newEmployee = new Employee();
    newEmployee.id = 3;
    newEmployee.firstName = "Nimisha";
    newEmployee.lastName = "J";

    this.allEmployees.push(newEmployee);

  }

  getAllEmployees() {
    return this.allEmployees;
  }

  addEmployee(newEmployee: Employee) {
    newEmployee.id = this.allEmployees.length + 1;
    this.allEmployees.push(newEmployee);
  }
}
