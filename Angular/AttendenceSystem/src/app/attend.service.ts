import { Injectable } from '@angular/core';
import { Attend } from '../model/Attend';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AttendService {
  url : string;
  employee : Attend;
  employeeArr : Attend[];
  
  constructor(private http:HttpClient) {
    this.url = "http://localhost:7016/employee";
    this.employee = new Attend();
    this.employeeArr=[];

    
   }
   presentEmployee( employee : Attend){
    this.http.post<Attend>(this.url,employee).subscribe()
    return "Present"
   }

   updateEmployee(employee : Attend){
    this.http.put<Attend>(this.url+"/"+employee.id,employee).subscribe()
    return "Updated"

   }

   deleteEmployee(empId : number){
    this.http.delete<Attend>(this.url+"/"+empId).subscribe()
    return "Deleted"
   }

   findEmployee(empId : number){
    this.http.get<Attend>(this.url+"/"+empId).subscribe(data => this.employee = data);
    return this.employee;
    
   }

   findAllEmployee(){
    this.http.get<Attend[]>(this.url).subscribe(data => this.employeeArr = data);
    return this.employeeArr;
    
   }
}
