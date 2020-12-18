import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { QAService } from 'src/app/apis/qa.service'
@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})

export class QuestionsComponent implements OnInit {

   
  @Input() mode: string;

  constructor(private service: QAService) { }
  items;
  favoris: any = [];
  user = JSON.parse(localStorage.getItem('user'))
  selectedItem
  ngOnInit(): void {
    if (this.mode && this.mode == 'recent') {
      this.service.getRecentQuestion(3).subscribe(data => {
        this.items = data;
        this.formatDate()
      })
    } else
      this.service.getQuestion()
        .subscribe((data) => {
          this.items = data;
          this.formatDate()
        })




  }
  formatDate() {
    this.items.forEach(item => {
      if (item.posted_date)
        item.date_ago = moment(item.posted_date).fromNow();
    });
  }


  

}