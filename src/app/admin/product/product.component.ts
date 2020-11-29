import { Component, OnInit } from '@angular/core';
import { ProduitService } from 'src/app/apis/produit.service';
import { ProductModel } from './product.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private srv:ProduitService) { }
  user = JSON.parse(localStorage.getItem('user'))
  list:any = []
  all:any =[]
  animal= []
  vegitale= []
  product: ProductModel
  show_form: Boolean
  is_update: Boolean
  btn_message: String
  filter
  ngOnInit(): void {
    this.product = new ProductModel();
    this.show_form = false;
    this.srv.getproduit().subscribe(res=>{
      this.list = res;
      this.all = this.list;
      this.filter = 'all'
      this.animal = this.list.filter(item => item.type == 'animal')
      this.vegitale = this.list.filter(item => item.type == 'vegitale')
    })
  }
  showList(type){
    switch(type){
      case 'all': this.list = this.all; this.filter = type; break; 
      case 'animal': this.list = this.animal; this.filter = type; break; 
      case 'vegitale': this.list = this.vegitale; this.filter = type; break; 
    }
  }

  addOrUpdate() {
    if (this.is_update) {
      this.srv.editproduit(this.product._id, this.product).subscribe(res => {

        Swal.fire({
          position: 'top-end',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500
        })
        this.show_form = false;
        this.all = this.list.map(elem => {
          if (elem._id == this.product._id) {
            return this.product
          }
          return elem
        })

        this.product = new ProductModel();
        this.animal = this.all.filter(item => item.type == 'animal')
        this.vegitale = this.all.filter(item => item.type == 'vegitale')
        this.showList(this.filter);
      })
    } else {
      this.srv.addproduit(this.product).subscribe(res => {
        this.all.push(res);
        this.product = new ProductModel();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500
        })
        this.show_form = false;
        this.animal = this.all.filter(item => item.type == 'animal')
        this.vegitale = this.all.filter(item => item.type == 'vegitale')
        this.showList(this.filter);
      })
    }
    
  }
  showAddForm() {
    this.product = new ProductModel;
    this.btn_message = "ajouter"
    this.show_form = !this.show_form;
    this.is_update = false;
  }
  showEditForm(elem) {
    this.product.title = elem.title
    this.product.type = elem.type
    this.product._id = elem._id
    this.is_update = true
    this.show_form = true
    this.btn_message = "mise a jour"
  }
  delete(id) {
    this.srv.removeproduit(id).subscribe(r => {
      this.all = this.all.filter(elem => elem._id != id);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'the News has been deleted',
        showConfirmButton: false,
        timer: 1500
      })
      this.animal = this.all.filter(item => item.type == 'animal')
      this.vegitale = this.all.filter(item => item.type == 'vegitale')
      this.showList(this.filter);
    })
  }

}
