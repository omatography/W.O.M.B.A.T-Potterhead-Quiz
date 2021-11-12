import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['../../app.component.css']
})
export class NavbarComponent implements OnInit {

  public username:string = "login please";
  constructor() { }

  ngOnInit(): void {
  }

}
