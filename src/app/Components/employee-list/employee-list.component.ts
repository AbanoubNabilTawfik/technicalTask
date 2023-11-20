import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/Services/employee.service';
import { IEmployee } from 'src/app/interfaces/IEmployee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  employeeList:IEmployee[]=[];
  employees:IEmployee[] = [];
  searchText = '';
  selectedFilter = 'All';
  constructor(private employeeService:EmployeeService,private router:Router){

  }
  ngOnInit(): void {
   
    this.employeeList=this.employeeService.getAllEmployees();
    this.employees = this.employeeList;
  }

  applyFilter() {
    this.employeeList = this.employees.filter((employee:IEmployee) => {
      const searchTextLowerCase = (this.searchText as string).toLowerCase(); // Explicitly cast to string
  
      if (this.selectedFilter === 'All') {
        return (
          employee.skills.some((skill:string) => skill.toLowerCase().includes(searchTextLowerCase)) ||
          employee.performance.toString().includes(searchTextLowerCase)
        );
      } else if (this.selectedFilter === 'Skills') {
        return employee.skills.some((skill:string) => skill.toLowerCase().includes(searchTextLowerCase));
      } else if (this.selectedFilter === 'Performance') {
        return employee.performance.toString().toLocaleLowerCase().includes(searchTextLowerCase.toLocaleLowerCase());
      }
      return false;
    });
  }
}
