import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../viewModels/user';
import { UserService } from '../apis/user.service';

@Component({
  selector: 'app-forgot-pass-newpass',
  templateUrl: './forgot-pass-newpass.component.html',
  styleUrls: ['./forgot-pass-newpass.component.css']
})
export class ForgotPassNewpassComponent implements OnInit {

  user : User = new User()
  constructor(private service : UserService,
    private router : Router ) { }

  ngOnInit(): void {
    if(localStorage.getItem('token')){
      this.router.navigate(['/agri/Acceuil'])
    }
  }


  testauth() {
this.service.login(this.user)
.subscribe((data : any)=>{
  console.log(data);
  localStorage.setItem('token' , data.token)
  localStorage.setItem('id' , data.id); 
  
this.router.navigate(['/agri'])
},(err)=>{

})

  } 

}
