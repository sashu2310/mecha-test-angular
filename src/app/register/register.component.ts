import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  firstName: String;
  lastName: String;
  mobileNumber: String;
  emailId: String;
  password: String;

  registerUserData: any;
  constructor(private _auth: AuthService,
    private _router: Router) { }

  ngOnInit() {
  }

  registerUser() {
    this.registerUserData = {
      firstName: this.firstName,
      lastName: this.lastName,
      mobileNumber: this.mobileNumber,
      emailId: this.emailId,
      password: this.password
    }
    this._auth.registerUser(this.registerUserData)
      .subscribe(
        res => {
          // localStorage.setItem('token', res.token)
          this._router.navigate(['/login'])
        },
        err => console.log(err)
      )
  }


}
