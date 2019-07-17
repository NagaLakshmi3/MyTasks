import { Component, OnInit } from '@angular/core';
import{UsersService} from'./users.service';

@Component({
    selector:"emp-list",
    templateUrl:'./usersdata.component.html',
    styles:[]

})

export class Employeelistcomponent implements OnInit{
public usersdata=[];
public error;
constructor(private _usersservice:UsersService){}
ngOnInit(){
this._usersservice.getEmployees()
.subscribe(result=>this.usersdata=result,
    error=>this.error=error);
}
} 