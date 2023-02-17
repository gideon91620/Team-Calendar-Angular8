import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'tc-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User = new User( null, null, null, "", "", "" ); 
  users: any;
  message: any;

  
  @Output() add = new EventEmitter<User>();
  @Output() remove = new EventEmitter<User>();

constructor(private service: UserService) { }

  ngOnInit() {
    this.getAllUsersForm();
  }

  onAdd(user: User) {
    this.add.emit(user);
    console.log('added', user);
  }
  onRemove(user: User) {
    this.remove.emit(user);
  }

  public getAllUsersForm() {
    let res = this.service.getAllUsers();
    res.subscribe((data) => this.users = data);
  }

  public getUserForm(id) {
    this.service.getUser(id);
  }

  public addUserForm() {
    let res = this.service.addUser(this.user); 
    res.subscribe((data) => this.message = data);
    this.getAllUsersForm();
  }

  public deleteUserForm(id: number) {
    let res = this.service.deleteUser(id);
    res.subscribe((data) => this.message = data);
    this.getAllUsersForm();
  }

  public prepareForUpdateForm(user) {
    this.user = user;
  }

  public updateUserForm() {
    let res = this.service.updateUser(this.user);
    res.subscribe((data) => this.message = data);
    this.getAllUsersForm();
    this.user = {};
  }

}
