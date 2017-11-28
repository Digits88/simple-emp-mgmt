import { Component, OnInit } from '@angular/core';
import { Employee } from 'app/models/employee';
import { EmployeeService } from 'app/employee.service';

@Component({
  selector: 'app-dashboard ',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  isAddEmployeeVisible = false;
  isShowDetailsVisible = false;

  allEmployees: Employee[] = [];

  selectedEmployee: Employee;

  constructor(private empService: EmployeeService) { }

  ngOnInit() {
    this.allEmployees = this.empService.getAllEmployees();
  }

  addEmployee() {
    this.isAddEmployeeVisible = true;
  }

  hideAddEmployee() {
    this.isAddEmployeeVisible = false;
  }
  showDetails(empId: number) {
    // alert(empId + 'clicked')
    this.isShowDetailsVisible = true;
    this.selectedEmployee = this.allEmployees.find(x => x.id == empId);
    console.log(JSON.stringify(this.selectedEmployee));
  }
}
