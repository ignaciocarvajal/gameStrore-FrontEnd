import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/model/model/user.model';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/model/objects/services/auth.service';

@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.scss']
})
export class RegisterClientComponent implements OnInit {

  user: UserModel;

  constructor(private register: AuthService) { }

  ngOnInit() {
    this.user = new UserModel();
  }

  registerUser(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.register.register(this.user).subscribe(resp => {
      console.log(resp);
    }, (err) => {
      console.log(err.error.error.message);
    });
  }
}
