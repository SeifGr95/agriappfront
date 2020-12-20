import { Component, Input, OnInit } from '@angular/core';
import { NewsService } from 'src/app/apis/news.service';
import { NewsModel } from 'src/app/viewModels/News.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  @Input() mode: string;

  news_list
  news: NewsModel
  file_name: String
  show_form: Boolean
  is_update: Boolean
  btn_message: String
  user = JSON.parse(localStorage.getItem('user'))

  constructor(private NewsService: NewsService) { }

  ngOnInit(): void {
    this.file_name = "Choose file";
    this.news = new NewsModel();
    this.show_form = false;
    if (this.mode && this.mode == "recent") {
      this.NewsService.getRecentNews(3).subscribe(res => {
        this.news_list = res
      })
    } else
      this.NewsService.getNews().subscribe(res => {
        this.news_list = res

      });
  }
  addOrUpdateNews() {
    if (this.is_update) {
      this.NewsService.updateNews(this.news._id, this.news).subscribe(res => {
        console.log(res);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500
        })
        this.show_form = false;
        this.news_list = this.news_list.map(elem => {
          if (elem._id == this.news._id) {
            return this.news
          }
          return elem
        })

        this.news = new NewsModel();
      })
    } else {
      this.NewsService.createNews(this.news).subscribe(res => {
        this.news_list.push(res);
        this.news = new NewsModel();
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
    this.news = new NewsModel();
    this.btn_message = "ajouter"
    this.show_form = !this.show_form;
    this.is_update = false;
  }
  showEditForm(elem) {
    this.news.title = elem.title
    this.news.description = elem.description
    this.news.contenu = elem.contenu
    this.news._id = elem._id
    this.news.image = elem.image
    this.is_update = true
    this.show_form = true
    this.btn_message = "mise a jour"
  }
  delete(id) {
    this.NewsService.deleteNews(id).subscribe(r => {
      this.news_list = this.news_list.filter(elem => elem._id != id);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'the News has been deleted',
        showConfirmButton: false,
        timer: 1500
      })
    })
  }

  upload(e) {
    var files = e.target.files
    var file = files[0]
    if (files && file) {
      var reader = new FileReader();
      reader.onload = this.loader.bind(this);
      reader.readAsBinaryString(file);
      this.file_name = file.name
    }
  }
  loader(readerEvt) {
    var binaryString = readerEvt.target.result;
    this.news.image = 'data:image/png;base64,' + btoa(binaryString);
  }

}
