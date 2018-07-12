import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  constructor(public http:Http){

  }

  getUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users')
    .pipe(map((response: any) => response.json()));
  }

  addUsers(user){
    return this.http.post('https://jsonplaceholder.typicode.com/users',user)
    .pipe(map((response: any) => response.json()));
  }

  deleteUser(id){
    return this.http.delete('https://jsonplaceholder.typicode.com/users/'+id)
    .pipe(map((response: any) => response.json()));
  }

  updateUser(user){
    return this.http.put('https://jsonplaceholder.typicode.com/users/'+user.id,user)
    .pipe(map((response: any) => response.json()))
  }
}
