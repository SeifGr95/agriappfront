import { Component, OnInit } from '@angular/core';
import { User } from '../viewModels/user';

import {UserService} from '../apis/user.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user : User = new User()
  constructor(private service : UserService,
    private router : Router ) { }

  ngOnInit(): void {
  }


  testauth() {
this.service.login(this.user)
.subscribe((data : any)=>{
  console.log(data);
  localStorage.setItem('token' , data.token)
  localStorage.setItem('id' , data.id)
this.router.navigate(['/agri'])
},(err)=>{

})

  } 
}
