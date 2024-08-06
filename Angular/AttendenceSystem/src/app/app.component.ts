import { Component } from '@angular/core';
import { Attend } from '../model/Attend';
import { AttendService } from './attend.service';
//import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  employee : Attend;
  result : string;
  employeeArr : Attend[];
  flag : boolean;
  

  constructor(private service : AttendService){
    this.employee = new Attend();
    this.result =" ";
    this.employeeArr = [];
    this.flag = false;
  }

  presentEmployee(data : any) {
    this.employee.id = data.empId;
    this.employee.empName = data.empName;
    this.employee.empDate = data.empDate;
    this.employee.empTime = data.empTime;
    alert(data.empId+" "+data.empName+" "+data.empDate+" "+data.empTime);
    this.result = this.service.presentEmployee(this.employee);
  }

  updateEmployee(data : any){
    this.employee.id = data.empId;
    this.employee.empName = data.empName;
    this.employee.empDate = data.empDate;
    this.employee.empTime = data.empTime;
    // alert(data.empId+" "+data.empName+" "+data.empDate+" "+data.empTime);
    this.result = this.service.updateEmployee(this.employee)

  }

  deleteEmployee(data : any){
    this.result = this.service.deleteEmployee(data.empId);
  }

  findEmployee(data : any){
    this.employee =this.service.findEmployee(data.empId);
    this.result = this.employee.id + " " + this.employee.empName + " " + this.employee.empDate+" "+this.employee.empTime;
  }

  findAllEmployee(){
   this.employeeArr = this.service.findAllEmployee();
   this.flag = true;
  }








//   employees: Attend[] = [
    
//   ];
//   employee: Attend = { empId: 0, empName: '', empDate: 0 , empTime: 0};
//   message: string = '';

//   presentEmployee() {
//     this.employees.push({ ...this.employee });
//     this.message = `ID ${this.employee.empId} Present`;
//     this.clearEmployee();
//   }
 
//   absentEmployee(){
//     this.employees.push({ ...this.employee });
//     this.message = `ID ${this.employee.empId} Absent`;
//     this.clearEmployee();
//   }
 


//   clearEmployee() {
//     this.employee = { empId: 0, empName: '', empDate: 0 , empTime:0};
//   }
}
