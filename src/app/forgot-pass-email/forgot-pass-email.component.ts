import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../apis/user.service';
import { User } from '../viewModels/user';

@Component({
  selector: 'app-forgot-pass-email',
  templateUrl: './forgot-pass-email.component.html',
  styleUrls: ['./forgot-pass-email.component.css']
})
export class ForgotPassEmailComponent implements OnInit {

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
