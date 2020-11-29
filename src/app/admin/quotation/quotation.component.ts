import { Component, OnInit } from '@angular/core';
import { ProduitService } from 'src/app/apis/produit.service';
import Swal from 'sweetalert2';
import { QuotationModel } from './quotation.model';

@Component({
  selector: 'app-quotation',
  templateUrl: './quotation.component.html',
  styleUrls: ['./quotation.component.css']
})
export class QuotationComponent implements OnInit {

  constructor(private srv: ProduitService) { }

  list: any = []
  products: any = []
  user = JSON.parse(localStorage.getItem('user'))
  all: any = []
  animal = []
  vegitale = []
  quota: QuotationModel
  show_form: Boolean
  is_update: Boolean
  btn_message: String
  filter
  ngOnInit(): void {
    this.quota = new QuotationModel();
    this.show_form = false;
    //get product for form
    this.srv.getproduit().subscribe(data => {
      this.products = data;
    })
    this.srv.getpartdemarche().subscribe(res => {
      this.list = res;
      this.all = this.list;
      this.filter = 'all'
      this.animal = this.list.filter(item => item.product.type == 'animal')
      this.vegitale = this.list.filter(item => item.product.type == 'vegitale')
    })
  }
  showList(type) {
    switch (type) {
      case 'all': this.list = this.all; this.filter = type; break;
      case 'animal': this.list = this.animal; this.filter = type; break;
      case 'vegitale': this.list = this.vegitale; this.filter = type; break;
    }
  }
  addOrUpdate() {
    if (this.is_update) {
      this.srv.editpartdemarche(this.quota._id, this.quota).subscribe(res => {
        console.log(this.quota)
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500
        })
        this.show_form = false;
        this.all = this.list.map(elem => {
          if (elem._id == this.quota._id)
            return this.quota

          return elem
        })

        this.quota = new QuotationModel();
        this.animal = this.all.filter(item => item.product.type == 'animal')
        this.vegitale = this.all.filter(item => item.product.type == 'vegitale')
        this.showList(this.filter);
      })
    } else {
      this.srv.addpartdemarche(this.quota).subscribe(res => {
        if (this.shouldAdd(this.quota.product)) {
          let product = this.getProductById(res['product'])
          res['product'] = product
          this.all.push(res)
        } else {
          this.all = this.list.map(elem => {
            if (elem.product._id == this.quota.product) {
              console.log(elem);
              console.log(this.quota);
              let product = this.getProductById(this.quota.product)
              this.quota.product = product
              this.quota._id = elem._id;
              return this.quota
            }
            return elem
          })
        }
        this.quota = new QuotationModel();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500
        })
        this.show_form = false;
        this.animal = this.all.filter(item => item.product.type == 'animal')
        this.vegitale = this.all.filter(item => item.product.type == 'vegitale')
        this.showList(this.filter)
      })
    }

  }
  showAddForm() {
    this.quota = new QuotationModel;
    this.btn_message = "ajouter"
    this.show_form = !this.show_form;
    this.is_update = false;
  }
  showEditForm(elem) {
    this.quota.product = elem.product
    this.quota.prix = elem.prix
    this.quota.unite = elem.unite
    this.quota._id = elem._id
    this.is_update = true
    this.show_form = true
    this.btn_message = "mise a jour"
  }
  delete(id) {
    this.srv.removepartdemarche(id).subscribe(r => {
      this.all = this.all.filter(elem => elem._id != id)
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'the News has been deleted',
        showConfirmButton: false,
        timer: 1500
      })
      this.animal = this.all.filter(item => item.product.type == 'animal')
      this.vegitale = this.all.filter(item => item.product.type == 'vegitale')
      this.showList(this.filter);
    })
  }

  getProductById(id) {
    let product = this.products.filter(elem => elem._id == id)[0]
    return product
  }

  shouldAdd(prod_id) {
    let quotaProd = this.all.filter(elem => elem.product._id == prod_id)
    if (quotaProd && quotaProd.length > 0) {
      return false
    }
    return true;
  }

}
