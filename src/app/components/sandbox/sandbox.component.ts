import {Component} from '@angular/core';
import { MyServiceService } from '../../services/my-service.service';

@Component({
    selector:'sandbox',
    templateUrl:`./sandbox.component.html`
   
})

export class SandboxComponent{
  text:string='Hello Praveen';
  users:any[];
  isEdit:boolean = false;
  user={
    id:'',
    name:'',
    email:'',
    phone:''
  }
  constructor(public myService:MyServiceService){
    this.myService.getUsers().subscribe(users =>{
      //console.log(users);
      this.users = users;
    });

  
  }

  onSubmit(isEdit){
    if(isEdit==true){
      this.myService.updateUser(this.user).subscribe(user =>{
        for(let i = 0;i < this.users.length;i++){
          if(this.users[i].id == this.user.id){
            this.users.splice(i,1);
          }
        }
        this.users.unshift(this.user);
      });
    } 

    
    else{
      this.myService.addUsers(this.user).subscribe(user =>{
        console.log(user);
        this.users.unshift(this.user);
      });
    }
  }
  
  onDeleteClick(id){
    this.myService.deleteUser(id).subscribe(res =>{
      console.log(res);
      for(let i = 0;i < this.users.length;i++){
        if(this.users[i].id == id){
          this.users.splice(i,1);
        }
      }
    });
  }

  onEditClick(user){
    this.isEdit = true; 
    this.user = user;
  }
}

