import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
// import { config } from '../assets/config.js';

@Injectable()
export class AuthService {
  private _registerUrl = `https://mighty-thicket-25243.herokuapp.com/test/signup`;
  headers = {
    'content-type': 'application/json',
    'x-api-key': 'BJIPIDuWMR3qK6lzQgYQmjNq7eh8QpR6BofUeYIDGBEx'
  }
  options = { headers: this.headers };
  constructor(private http: HttpClient,
    private _router: Router) { }

  registerUser(user) {
    return this.http.post<any>(this._registerUrl, user, this.options);
  }

  loginUser(user) {
    const url = `https://mighty-thicket-25243.herokuapp.com/test/login/username/${user.username}/password/${user.password}`;
    return this.http.get<any>(url, this.options);
  }

  logoutUser() {
    localStorage.removeItem('token')
    localStorage.removeItem('user._id')
    localStorage.removeItem('user.firstName')
    this._router.navigate(['/login'])
  }

  getToken() {
    return localStorage.getItem('token')
  }

  loggedIn() {
    return !!localStorage.getItem('token')
  }
}
