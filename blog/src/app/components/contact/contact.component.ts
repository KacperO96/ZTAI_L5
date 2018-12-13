import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() {
  }

  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z]+")]),
    surname: new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z]+")]),
    email: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
  });

  ngOnInit() {
  }

}
