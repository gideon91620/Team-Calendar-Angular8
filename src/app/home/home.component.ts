import { Component, OnInit } from '@angular/core';
import { User } from '../user';


@Component({

  
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  

  users: User[] = [];

  constructor() { }

  ngOnInit() {
  }

  addUser(user: User) {
    console.log('before', this.users);
    
    this.users.push(user);
    console.log('user added', this.users);
  }
  removeUser(user: User) {
    const index = this.users.indexOf(user);
    if (index > -1) {
      this.users.splice(index, 1);
    }
  }

}
