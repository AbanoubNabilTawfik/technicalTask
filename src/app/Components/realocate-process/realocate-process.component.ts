import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-realocate-process',
  templateUrl: './realocate-process.component.html',
  styleUrls: ['./realocate-process.component.scss']
})
export class RealocateProcessComponent implements OnInit {
  employeeId: number = 0;
  employee: any;
  departments = [
    { value: 'IT', description: 'Information Technology' },
    { value: 'Marketing', description: 'Marketing' },
    { value: 'Sales', description: 'Sales' },
  ];

  selectedDepartment: string = '';
  isSameDepartment:boolean=false;
  constructor( private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService){}


  ngOnInit(): void {
     this.route.params.subscribe(params => {
      this.employeeId = +params['id'];
      this.employee = this.employeeService.getAllEmployees().find(e => e.id === this.employeeId);
    });
  }
  submitRelocation() {
    if (this.selectedDepartment) {
      this.employeeService.updateDepartment(this.employeeId, this.selectedDepartment);
      this.router.navigate(['/employee-list']);
    }
  }
  checkEmployeeCurrentDepartment()
  {
    if(this.selectedDepartment===this.employee.currentDepartment)
    {
      this.isSameDepartment=true;
    }
    else
    {
      this.isSameDepartment=false;
    }
  }
}
