import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmployee } from '../interfaces/IEmployee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employeeList:IEmployee[]=[
    {
        "id":1,
        "name":"Abanoub Nabil",
        "currentDepartment":"IT",
        "skills":["Angular","C#","React"],
        "performance":"Excellent",
        "imageURL":"/assets/images/woman.jpg"
    },
    {
        "id":2,
        "name":"Mohamed Gamal",
        "currentDepartment":"Marketing",
        "skills":["Markiting","Social","English"],
        "performance":"Good",
        "imageURL":"/assets/images/woman.jpg"
    },
    {
        "id":3,
        "name":"Sara Mostafa",
        "currentDepartment":"Sales",
        "skills":["English","Sales","Communication"],
        "performance":"Very Good",
        "imageURL":"/assets/images/woman.jpg"
    },
    {
        "id":4,
        "name":"Merna Marcos",
        "currentDepartment":"IT",
        "skills":["HTML","CSS","JavaScript"],
        "performance":"Good",
        "imageURL":"/assets/images/woman.jpg"
    }

];
  _baseUrl="/assets/Data/employee.json";
  constructor(private http:HttpClient) { }

  // getAllEmployees():Observable<IEmployee[]>
  // {
  //  return this.http.get<IEmployee[]>(this._baseUrl);
  // }

  getAllEmployees()
  {
   return this.employeeList;
  }

  updateDepartment(employeeId: number, newDepartment: string) {
    const employee = this.employeeList.find(e => e.id === employeeId);
    if (employee) {
      employee.currentDepartment = newDepartment;
    }
  }
}
