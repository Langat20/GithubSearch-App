import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {UserService} from '../user.service'
import { UsersComponent } from '../users/users.component';

@Component({
  selector: 'app-git-form',
  templateUrl: './git-form.component.html',
  styleUrls: ['./git-form.component.css']
})
export class GitFormComponent implements OnInit {
  
  username: string;  
  constructor(private userService: UserService) { }
  findProfile() {
    this.userService.updateProfile(this.username)
    
  }

  ngOnInit() {
  }


}
