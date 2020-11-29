import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { RdvService } from '../apis/rdv.service';

@Component({
  selector: 'app-rendezvous',
  templateUrl: './rendezvous.component.html',
  styleUrls: ['./rendezvous.component.css']
})
export class RendezvousComponent implements OnInit {

  list:any = []
  all:any = []
  search_txt
  user = JSON.parse(localStorage.getItem('user'))
  constructor(private srv:RdvService) { }

  ngOnInit(): void {
    console.log(this.user._id);
    this.srv.getbyId(this.user.email).subscribe(data=>{
      console.log(data)
      this.all = data;
      this.list = this.all;
    })
  }
  search(){
    this.list = this.all.filter(elem=> (
      elem.name.includes(this.search_txt) ||
      elem.email.includes(this.search_txt) ||
      elem.firstname.includes(this.search_txt) ||
      elem.tel_exp.includes(this.search_txt) ||
      elem.ville_exp.includes(this.search_txt)
    ))
  }

  updateEtat(etat , rdv ) {
    let body = { Etat : etat , client : rdv.client , expert : rdv.expert }
    this.srv.updateEtat(rdv._id , body ).subscribe(data=>{
      
      this.ngOnInit()
      Swal.fire ("" , "" , "success")} ) 



  }


}
