import { Injectable } from "@angular/core";
import { User } from "src/_models/user";
import { LocalStorageService } from "./localStorageService";

@Injectable({
    providedIn: 'root'
})
export class UserService{

    readonly USERS = 'USERS';

    constructor(private localStorageService:LocalStorageService){

    }

    getUsers(){
        return <User[]>(this.localStorageService.get(this.USERS));
    }


    addUser(user:User){
        debugger;
        let users = this.getUsers()??[];
        users.push(user);
        this.localStorageService.set(this.USERS, users);
    }
}