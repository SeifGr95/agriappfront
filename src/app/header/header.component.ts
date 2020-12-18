import { Component, OnChanges, OnInit } from '@angular/core';
import { UserService } from '../apis/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit  {

  notifs = []
  show = false 
  constructor(private srv : UserService ) { }

  user = JSON.parse(localStorage.getItem("user"))
  ngOnInit(): void {
    console.log("test" , this.user.email)
    if
    ( this.user.type == "expert") {
      this.srv.getusernotification(this.user.email).subscribe((data:any[])=>{
        this.notifs = data 
        console.log(this.notifs);
        
      })
      
    } else {
      this.srv.getagriNotification(this.user._id).subscribe((data:any[])=>{
        this.notifs = data 
        console.log(this.notifs);
        
      })
    }
   
  }

  

  dropdown () {
    this.show = !this.show
  }
}
