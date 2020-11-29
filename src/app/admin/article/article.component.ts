import { Component, OnInit } from '@angular/core';
import {ArticleService} from 'src/app/apis/article.service'
import {ArticleModel} from 'src/app/viewModels/Article.model'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor(private artcile_srv: ArticleService) { }

  article_list : any = []
  article: ArticleModel
  show_form: Boolean
  is_update: Boolean
  btn_message: String

  user = JSON.parse(localStorage.getItem('user'))

  ngOnInit(): void {
    this.article = new ArticleModel();
    this.show_form = false;

    this.artcile_srv.getarticle().subscribe(data=>{
      this.article_list = data
    })
  }

  addOrUpdate() {
    if (this.is_update) {
      this.artcile_srv.updatearticle(this.article._id, this.article).subscribe(res => {
        console.log(res);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500
        })
        this.show_form = false;
        this.article_list = this.article_list.map(elem => {
          if (elem._id == this.article._id) {
            return this.article
          }
          return elem
        })

        this.article = new ArticleModel();
      })
    } else {
      this.artcile_srv.createarticle(this.article).subscribe(res => {
        this.article_list.push(res);
        this.article = new ArticleModel();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500
        })
        this.show_form = false;
      })
    }

  }
  showAddForm() {
    this.article = new ArticleModel();
    this.btn_message = "ajouter"
    this.show_form = !this.show_form;
    this.is_update = false;
  }
  showEditForm(elem) {
    this.article.title = elem.title
    this.article.description = elem.description
    this.article.contenu = elem.contenu
    this.article._id = elem._id
    this.is_update = true
    this.show_form = true
    this.btn_message = "mise a jour"
  }
  delete(id) {
    this.artcile_srv.deletearticle(id).subscribe(r => {
      this.article_list = this.article_list.filter(elem => elem._id != id);
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
