import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/model/model/user.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.scss']
})
export class RegisterClientComponent implements OnInit {

  user: UserModel;

  constructor() { }

  ngOnInit() {
    this.user = new UserModel();
  }

  registerUser(form: NgForm) {
    if (form.invalid) {
      return;
    }
    console.log('form enviad3');
    console.log(this.user);
    console.log(form);
  }
}
