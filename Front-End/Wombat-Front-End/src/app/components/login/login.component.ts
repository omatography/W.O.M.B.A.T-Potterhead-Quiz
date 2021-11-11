import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/entities/User';
import { LoginService } from 'src/app/services/loginservice.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public userList: Array<User> = [];
  public LoggedIn: boolean = false;

  constructor(private loginService:LoginService,private route:Router) {

   }

  ngOnInit(): void {
    
  }

  // username:string, password:string
  checkUser(username:string, password:string){
    this.loginService.fetchallusers()
    .subscribe((res:any)=>{
      this.userList = res;
      console.log(this.userList)
      environment.username = username;
      console.log(environment.username);
      this.userList.forEach((temp:User)=>{
        if(temp.username === username && temp.password === password ){
          this.LoggedIn = true;
          console.log(this.LoggedIn);
          this.route.navigate(['/home']);

        }
      })
    })
  }

}
