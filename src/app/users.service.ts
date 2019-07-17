import { Injectable } from "@angular/core";
import{ HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import{Users} from './usersdata'
@Injectable()
export class UsersService{
    private Data:string="../assets/data.json";
    constructor(private http:HttpClient){}
    getEmployees():Observable<Users[]>{
        return this.http.get<Users[]>(this.Data);

    }

}