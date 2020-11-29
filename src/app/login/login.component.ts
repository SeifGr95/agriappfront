import { Component, OnInit } from '@angular/core';
import { User } from '../viewModels/user';

import { UserService } from '../apis/user.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: User = new User();
  constructor(private service: UserService, private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      this.router.navigate(['/agri/Acceuil']);
    }
  }

  testauth() {
    if (this.ValidateEmail(this.user.email)) {
      this.service.login(this.user).subscribe(
        (data: any) => {
          localStorage.setItem('token', data.token);
          localStorage.setItem('id', data.id);
          localStorage.setItem('user', JSON.stringify(data.user));
          if (data.user.type == "admin")
            this.router.navigate(['/admin']);
          else
            this.router.navigate(['/agri']);
        },
        (err) => {
          console.log(err.error.message)

          Swal.fire({
            title: "Erreur",
            icon: 'error',
            text: err.error.message,
            timer: 2000,
            position: 'top-right'
          })
        }
      );
    } else {
      Swal.fire({
        title: "Erreur",
        text: "Verifier votre Email",
        timer: 2000,
        icon: 'error',
        position: 'top-right'
      })
    }

  }
  ValidateEmail(mail) {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)) {
      return (true)
    }
    return (false)
  }
}
