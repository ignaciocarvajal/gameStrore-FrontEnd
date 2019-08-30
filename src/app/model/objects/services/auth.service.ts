import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../../model/user.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apikey = '';

  // Crear nuevo usuario:'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]';
  private urlRegister = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + this.apikey;

  // Iniciar sesion: 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]';
  private urlLogin = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + this.apikey;

  userToken: string;

  constructor(private http: HttpClient) { }

  login(user: UserModel) {
    const authData = {
      // Esto => email: user.email, password: user.password, => es lo mismo que:
      ...user,
      returnSecureToken: true
    };
    return this.http.post(this.urlLogin, authData)
      .pipe(
        map(resp => {
          this.saveToken(resp['idToken']);
          return resp;
        })
      );
  }

  logout() {
    localStorage.removeItem('token');
  }

  register(user: UserModel) {
    const authData = {
      // Esto => email: user.email, password: user.password, => es lo mismo que:
      ...user,
      returnSecureToken: true
    };
    return this.http.post(this.urlRegister, authData
    ).pipe(
      map(resp => {
        this.saveToken(resp['idToken']);
        return resp;
      })
    );
  }

  saveToken(idToken: string) {
    this.userToken = idToken;
    localStorage.setItem('token', idToken);

    let today = new Date();
    today.setSeconds(3600);

    localStorage.setItem('expire', today.getTime().toString());
  }

  readToken() {
    if (localStorage.getItem('token')) {
      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = '';
    }
  }

  isAuthenticated(): boolean {
    if (this.userToken.length < 2) {
      return false;
    }

    const expire = Number(localStorage.getItem('expire'));

    const expireDate = new Date();
    expireDate.setTime(expire);

    if (expireDate > new Date()) {
      return true;
    } else {
      return false;
    }
  }
}
