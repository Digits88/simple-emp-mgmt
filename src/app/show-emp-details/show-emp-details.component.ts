import { Component, OnInit, Input } from '@angular/core';
import { Employee } from 'app/models/employee';

@Component({
  selector: 'app-show-emp-details',
  templateUrl: './show-emp-details.component.html',
  styleUrls: ['./show-emp-details.component.css']
})
export class ShowEmpDetailsComponent implements OnInit {

 @Input() employee: Employee;

  constructor() { }

  ngOnInit() {
  }

}
