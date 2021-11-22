import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/_models/user';
import { UserService } from 'src/_services/userService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SirvanSamAngularProject';

  formData:User = new User();

  users:User[];

  constructor(private userService:UserService){
    this.users = userService.getUsers();
    this.formData.id = this.getMaxId(this.users);
  }

  onSubmit(ngForm:NgForm){
      this.userService.addUser(this.formData);
      this.users = this.userService.getUsers();

      ngForm.reset();

      this.formData = new User();
      this.formData.id = this.getMaxId(this.users) + 1;

  }

  getMaxId(users:User[]){
      return Math.max( ...(users?.map(x=>x.id) ?? [0]));
  }

}
