import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/apis/user.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private userservice:UserService) { }

email; 
subject; 
text; 

  ngOnInit(): void {



  }

  send(){

    let body={
      email:this.email,
      subject:this.subject, 
      text:this.text
    }
    console.log(body);
    
    this.userservice.contact(body).subscribe(data=>{
      console.log("verify");
      
      
    })
  }
  
    
}
