import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/apis/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {


  search_txt 
  all 

  constructor(private user_srv:UserService) { }
  list_user:any=[]
  ngOnInit(): void {
    this.user_srv.getAll().subscribe(data=>{
      this.list_user = data['users'].filter((usr)=> usr.type != 'expert' && usr.type != 'admin')
      this.all = this.list_user
    })
  }



  delete(elem_id){
    this.user_srv.delete(elem_id).subscribe(r=>{
      console.log(r)
      this.list_user = this.list_user.filter(item=> item._id != elem_id)
    })
  }


  search(){
    console.log(this.search_txt)
    this.list_user = this.all.filter(elem=> (
      elem.name.includes(this.search_txt) ||
      elem.email.includes(this.search_txt) ||
      elem.firstname.includes(this.search_txt) 

    ))
  }



  
}
