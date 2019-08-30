import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

import { UserModel } from 'src/app/model/model/user.model';
import { AuthService } from 'src/app/model/objects/services/auth.service';

@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.scss']
})
export class RegisterClientComponent implements OnInit {

  user: UserModel;

  constructor(private register: AuthService, private router: Router) { }

  ngOnInit() {
    this.user = new UserModel();
  }

  registerUser(form: NgForm) {
    if (form.invalid) {
      return;
    }

    Swal.fire({
      allowOutsideClick: false,
      type: 'info',
      text: 'Wait a second please...'
    });

    Swal.showLoading();

    this.register.register(this.user).subscribe(resp => {
      console.log(resp);
      Swal.close();
      this.router.navigateByUrl('/login');
    }, (err) => {
      Swal.fire({
        type: 'error',
        title: 'Authentication failed',
        text: err.error.error.message
      });
    });
  }
}
