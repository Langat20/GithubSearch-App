import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service'

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  repos:any[];
  repository: {name: string; full_name: string; description: string; language: string; homepage: string; html_url: string;}

  constructor(private userService: UserService) {

    this.userService.getProfileRepos().subscribe((repos) => {
      this.repos = repos;
    })
   }

  ngOnInit(): void {
  }

}
