import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

import { UserModel } from 'src/app/model/model/user.model';
import { AuthService } from 'src/app/model/objects/services/auth.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {

  user: UserModel = new UserModel();

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  loginUser(form: NgForm) {
    if (form.invalid) {
      return;
    }

    Swal.fire({
      allowOutsideClick: false,
      type: 'info',
      text: 'Wait a second please...'
    });

    Swal.showLoading();

    this.auth.login(this.user).subscribe(resp => {
      console.log(resp);
      Swal.close();
      this.router.navigateByUrl('/home');
    }, (err) => {
      Swal.fire({
        type: 'error',
        title: 'Authentication failed',
        text: err.error.error.message
      });
    });
  }
}
