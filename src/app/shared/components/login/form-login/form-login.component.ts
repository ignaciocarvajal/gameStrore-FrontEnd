import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/model/model/user.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {

  user: UserModel = new UserModel();

  constructor() { }

  ngOnInit() {
  }

  loginUser(form: NgForm) {
    if (form.invalid) {
      return;
    }
    console.log(this.user);
    console.log(form);

  }
}
