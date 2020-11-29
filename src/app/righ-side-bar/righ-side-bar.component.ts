import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { UserService } from '../apis/user.service';

@Component({
  selector: 'app-righ-side-bar',
  templateUrl: './righ-side-bar.component.html',
  styleUrls: ['./righ-side-bar.component.css']
})
export class RighSideBarComponent implements OnInit {

email ; 
updateemail () {
this.srv.updateemail(this.user._id, this.email)
.subscribe(data=> { 
  this.user.email= this.email
  localStorage.setItem("user", JSON.stringify(this.user))
Swal.fire("email modifié", "", "success")
}) 
}

oldpwd ;
newpwd ;
confnewpwd ; 
updatepwd () {
this.srv.updatepwd (this.user._id, this.oldpwd, this.newpwd )
.subscribe(data=> { 

Swal.fire("mot de passe modifié", "", "success")
}) 
}

  constructor( private srv : UserService   ) { }
user= JSON.parse(localStorage.getItem('user'))
  ngOnInit(): void { this.email = this.user.email
  }


}
