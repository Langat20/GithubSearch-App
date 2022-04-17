import { Component, OnInit } from '@angular/core';
//import { profile } from 'console';
import {UserService} from '../user.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
username: string;
profile: {name: string; followers: number; login: string; company: string; avatar_url: string; bio: string; public_repos: number; html_url: string; public_gists: number; following: number; created_at: string; updated_at: string;}
  constructor(private userService: UserService) {
   
   }
   findProfile() {
    this.userService.updateProfile(this.username)
    this.userService.getProfileInfo().subscribe((profile =>{
      console.log(profile)
      this.profile = profile
    }))
  }

  ngOnInit(): void {
  }

}
