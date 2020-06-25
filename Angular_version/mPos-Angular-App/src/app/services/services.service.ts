import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ServicesService {

  constructor(private httpClient: HttpClient) {}

  getAllEmployees(): Observable<any> {
    return this.httpClient.get("http://dummy.restapiexample.com/api/v1/employees"); 
  }

  addEmployee(employee: any){
    let body = JSON.stringify(employee);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.httpClient.post("http://dummy.restapiexample.com/api/v1/create",body, {headers: headers});
  }

  updateEmployee(id: any, newEmployee){
    let body = JSON.stringify(newEmployee);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.httpClient.put("http://dummy.restapiexample.com/api/v1/update/"+id, body, {headers: headers});
  }

  deleteEmployee(id: any){
    return this.httpClient.delete("http://dummy.restapiexample.com/api/v1/delete/"+id);
  }
}
