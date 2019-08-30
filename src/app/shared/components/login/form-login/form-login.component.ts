import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/model/model/user.model';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/model/objects/services/auth.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {

  user: UserModel = new UserModel();

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  loginUser(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.auth.login(this.user).subscribe(resp => {
      console.log(resp);
    }, (err) => {
      console.log(err.error.error.message);
    });
  }
}
