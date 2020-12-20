import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../viewModels/user';
import { UserService } from '../apis/user.service';

@Component({
  selector: 'app-forgot-pass-newpass',
  templateUrl: './forgot-pass-newpass.component.html',
  styleUrls: ['./forgot-pass-newpass.component.css']
})
export class ForgotPassNewpassComponent implements OnInit {

  
  constructor(private router: Router, private route: ActivatedRoute, private apis: UserService) { }
  
  token;
  password;
  isExpired = false;
  user;
  ngOnInit() {
    this.token = this.route.snapshot.params['token'];
    let body = { token: this.token }
    this.apis.getUserByToken(body)
      .subscribe((data: any) => {
        this.user = data;
      }, error => {
        this.isExpired = true;
      })
  }
  update_password() {
    let body = {
      token: this.token,
      password: this.password,
      email: this.user.email
    }
    this.apis.resetPassword(body)
      .subscribe((data: any) => {
        this.router.navigate(['']);

      }, error => {
        this.isExpired = true;
      })

  }

  

}
