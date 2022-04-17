import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private username: string;
  private clientSecret: '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';
  constructor(private httpClient:HttpClient) {
    this.username='Langat20';
   }
   getProfileInfo(){
     var profile= this.httpClient.get("https://api.github.com/users/" + this.username)
     .pipe(map((response: any)=>response));
     console.log(profile)
     return profile
   }

   getProfileRepos(){
    var repos= this.httpClient.get("https://api.github.com/users/" + this.username + "/repos")
    .pipe(map((response: any)=>response));
    return repos;
   }
   updateProfile(username: string){
     this.username= username
   }
}
