import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from "../../services/auth-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public authService: AuthServiceService, public router: Router) { }

  ngOnInit() {
  }

  logOut(){
    return this.authService.logout().subscribe(()=>{
      this.router.navigate(['/'])
    });
  }

  isLoggedIn(){
    return this.authService.isLoggedIn();
  }

}
