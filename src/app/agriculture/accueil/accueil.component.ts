import { Component, OnInit } from '@angular/core';
import {ArticleService} from 'src/app/apis/article.service'
declare var $ : any;
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor(private articlesrv : ArticleService ) { } //
articles;
selectedArticle
  ngOnInit(): void {
    this.articlesrv.getarticle()
    .subscribe((data)=>{
      this.articles=data;
      console.log(this.articles)
    })

  }
  showarticle(element){
    $(".modal-backdrop").css('display' , 'none')
    this.selectedArticle=element
  }

}
