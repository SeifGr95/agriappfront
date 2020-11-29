import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { CommisariatService } from '../apis/commisariat.service';
import {CommisariatModel} from './commisariat.model'

@Component({
  selector: 'app-commisariat',
  templateUrl: './commisariat.component.html',
  styleUrls: ['./commisariat.component.css']
})
export class CommisariatComponent implements OnInit {

  list: any = []
  all: any = []
  user = JSON.parse(localStorage.getItem('user'))
  search_txt
  com: CommisariatModel
  show_form: Boolean
  is_update: Boolean
  btn_message: String

  constructor(private srv:CommisariatService) { }

  ngOnInit(): void {
    this.com = new CommisariatModel();
    this.show_form = false;
    this.srv.get().subscribe(data=>{
      this.list = data;
      this.all = this.list
    })
    
  }
  search(){
    this.list = this.all.filter(elem=> (
      elem.adresse_com.includes(this.search_txt) ||
      elem.email_com.includes(this.search_txt) ||
      elem.name_com.includes(this.search_txt) ||
      elem.tel_com.includes(this.search_txt) ||
      elem.ville_com.includes(this.search_txt)
    ))
  }

  addOrUpdate() {
    if (this.is_update) {
      this.srv.update(this.com._id, this.com).subscribe(res => {
        console.log(this.com)
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500
        })
        this.show_form = false;
        this.list = this.list.map(elem => {
          if (elem._id == this.com._id)
            return this.com

          return elem
        })

        this.com = new CommisariatModel();
      })
    } else {
      this.srv.create(this.com).subscribe(res => {
          this.list.push(res)
        
        this.com = new CommisariatModel();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500
        })
        this.show_form = false
      })
    }

  }
  showAddForm() {
    this.com = new CommisariatModel;
    this.btn_message = "ajouter"
    this.show_form = !this.show_form;
    this.is_update = false;
  }
  
  showEditForm(elem) {
    this.com.adresse_com = elem.adresse_com
    this.com.email_com = elem.email_com
    this.com.name_com = elem.name_com
    this.com.tel_com = elem.tel_com
    this.com.ville_com = elem.ville_com
    this.com._id = elem._id
    this.is_update = true
    this.show_form = true
    this.btn_message = "mise a jour"
  }
  delete(id) {
    this.srv.delete(id).subscribe(r => {
      this.list = this.list.filter(elem => elem._id != id)
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'the News has been deleted',
        showConfirmButton: false,
        timer: 1500
      })
      
    })
  }

}
