import { Component, OnInit } from '@angular/core';
import {QAService} from 'src/app/apis/qa.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-questions-details',
  templateUrl: './questions-details.component.html',
  styleUrls: ['./questions-details.component.css']
})
export class QuestionsDetailsComponent implements OnInit {

  constructor(private service : QAService , private route : ActivatedRoute , private router : Router) { }
  question;
  answers;
  new_answer
  id;
  user = JSON.parse(localStorage.getItem('user'))

  user_id = localStorage.getItem('id')
    ngOnInit(): void {
      this.id = this.route.snapshot.params['id']
      this.service.getQuestionbyId(this.id)
      .subscribe((data)=>{
        this.question=data;
        console.log(this.question)
      })
      this.service.getAnswerById(this.id)
      .subscribe((data)=>{
        this.answers=data;
        console.log(this.answers)
      })
    }

    add_answer(){
      let body ={
        user : localStorage.getItem('id'),
        question : this.id,
        answer : this.new_answer 
      }
      this.service.createAnswer(body)
      .subscribe((data)=>{
        this.ngOnInit();
        this.new_answer = undefined
      })
    }
    delete(){
      this.service.deleteQuestion(this.id)
      .subscribe(()=>{
        this.router.navigate(['/agri/questions'])
      })
    }

  }


