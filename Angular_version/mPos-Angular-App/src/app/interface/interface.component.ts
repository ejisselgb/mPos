import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service'

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.css']
})
export class InterfaceComponent implements OnInit {

  addEmployee = {name: '', salary: '', age: ''}
  newEmployee: any;
  employee: any;
  idEmployee: any;
  nameEmployee: any;
  salaryEmployee: any;
  ageEmployee: any;
  status: any;

  constructor(private servicesService : ServicesService) { 
    this.getEmployees();
  }

  ngOnInit(): void {
  }

  getEmployees(){
    this.servicesService.getAllEmployees().subscribe(response =>{
      this.employee = response.data;
    }, error => {
      alert("Ha ocurrido un error por favor intente nuevamente: " + error);
    });
  }

  createEmployee(){

    if(this.status === undefined){
      this.servicesService.addEmployee(this.addEmployee).subscribe(response =>{
        this.messageResponse(response, "creado");
      },error => {
        alert("Ha ocurrido un error por favor intente nuevamente: " + error);
      })
    }else{
      
      this.newEmployee = {
        employee_name: this.addEmployee.name === "" ?  this.nameEmployee : this.addEmployee.name,
        employee_salary: (this.addEmployee.salary === "" ?  this.salaryEmployee : this.addEmployee.salary).toString(),
        employee_age:  (this.addEmployee.age === "" ?  this.ageEmployee : this.addEmployee.age).toString(),
      }
      
      this.servicesService.updateEmployee(this.idEmployee, this.newEmployee).subscribe(response =>{
        this.messageResponse(response, "actualizado");
      }, error => {
        alert("Ha ocurrido un error por favor intente nuevamente: " + error);
      })
    }
    
  }

  deleteEmployee(id){
    this.servicesService.deleteEmployee(id).subscribe(response => {
      alert("El usuario no. " + id + " se ha eliminado correctamente");
    }, error => {
      alert("Ha ocurrido un error por favor intente nuevamente: " + error);
    })
  }

  updateEmployee(id, name, salary, age, status){
    document.getElementById("modalCreate").innerHTML = "Editar empleado";
    this.idEmployee = id;
    this.nameEmployee = name;
    this.salaryEmployee = salary;
    this.ageEmployee = age;
    this.status = status
  }

  messageResponse(response, type){
    response.status === "failed" ? alert("No ha sido posible ejecutar correctamente la acción, ERROR: " + response.message) : alert("El usuario se ha " + type + " correctamente. Usuario: " + JSON.stringify(response.data));
    window.location.reload();
  }

  refreshSite(){
    window.location.reload()
  }

}
