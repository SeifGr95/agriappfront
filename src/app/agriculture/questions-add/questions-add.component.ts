import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/viewModels/question';
import { QAService } from 'src/app/apis/qa.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-questions-add',
  templateUrl: './questions-add.component.html',
  styleUrls: ['./questions-add.component.css']
})
export class QuestionsAddComponent implements OnInit {

  constructor(private service : QAService , private router : Router, private toastr: ToastrService) { }

  question : Question = new Question()
  ngOnInit(): void {
  }
  createQuestion(){
    console.log(this.question);
    this.service.createQuestion(this.question)
    .subscribe(()=>{
      this.toastr.success('Success', '');
      this.router.navigate(['/agri/questions'])
    })
  }

  upload(e) {
    var files = e.target.files;
    var file = files[0];
    if (files && file) {
      var reader = new FileReader();
      reader.onload = this.loader.bind(this);
      reader.readAsBinaryString(file);
    }
  }
  loader(readerEvt) {
    var binaryString = readerEvt.target.result;
    this.question.image = 'data:image/png;base64,' + btoa(binaryString);
  }
}
