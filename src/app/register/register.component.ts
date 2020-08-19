import { Component, OnInit } from '@angular/core';
import { FormGroup, FormsModule, FormControl, Validators } from '@angular/forms';
import {User} from'src/app/viewModels/user';
import {UserService} from '../apis/user.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService : UserService ,
    private router: Router) { }
registerForm : FormGroup ; 
user : User = new User()
  ngOnInit(): void { 
this.registerForm= new FormGroup ({

'name' : new FormControl(Validators.required), 
'firstname' : new FormControl(Validators.required), 
'email' : new FormControl([Validators.required, Validators.email]), 
'password' : new FormControl([Validators.required, Validators.minLength(6)]), 
'confirmpassword' : new FormControl([Validators.required, Validators.minLength(6)]),

})


    
  }

  register(){console.log(this.registerForm.valid);

console.log(this.user);

this.userService.createUser(this.user)
.subscribe((data)=>{
  console.log(data);
this.router.navigate(['/'])
},(err)=>{

})

  }

}
