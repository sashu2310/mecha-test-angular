import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData: any;
  isError = false;
  errorMsg;
  constructor(private _auth: AuthService,
    private _router: Router) { }

  ngOnInit() {
  }

  loginUser() {
    this._auth.loginUser(this.loginUserData)
      .subscribe(
        res => {
          console.log(res);
          if (res.success) {
            console.log(res);
            localStorage.setItem('token', res.token);
            localStorage.setItem('_id', res.data._id);
            localStorage.setItem('firstName', res.data.firstName);
            this._router.navigate(['/block']);
          }
          else {
            console.log('Wrong credentials');
            this._router.navigate(['/login']);
          }
        },
        err => {
          this.isError = true;
          this.errorMsg = err.error.error.message;
          console.log(this.isError, this.errorMsg);
        }
      )
  }

}
