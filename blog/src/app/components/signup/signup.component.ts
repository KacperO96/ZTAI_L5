import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from "../../services/auth-service.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  userValues = {
    name: "",
    email: "",
    password: "",
  };

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email:  new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(public authService: AuthServiceService,
              private router: Router) { }

  ngOnInit() {
  }

  singUp(){
    return this.authService.createOrUpdate(this.userValues).subscribe(() =>{
      this.router.navigate(['/']);
    });
  }

}
