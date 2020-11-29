import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class QAService {
  constructor(private http: HttpClient) {}
  url = 'http://localhost:3000';
  token = localStorage.getItem('token');
  options = {
    headers: new HttpHeaders({
      'x-access-token': localStorage.getItem('token'),
    }),
  };

  
  getQuestion() {
    return this.http.get(this.url + '/question', this.options);
  }
  
  getRecentQuestion(limit) {
    return this.http.get(this.url + '/question/recent/'+limit, this.options);
  }

  getQuestionbyId(id) {
    return this.http.get(this.url + '/question/'+id, this.options);
  }

  
  createQuestion(body) {
    return this.http.post(this.url + '/question',body, this.options);
  }


  updateQuestion(id , body) {
    return this.http.put(this.url + '/question/'+id , body, this.options);
  }


  deleteQuestion(id) {
    return this.http.delete(this.url + '/question/'+id, this.options);
  }

  getAnswerById(q_id) {
    return this.http.get(this.url + '/answer/ByQuestionId/'+q_id, this.options);
  }
  createAnswer(body) {
    return this.http.post(this.url + '/answer', body,  this.options);
  }

  updateAnswer(id, body) {
    return this.http.put(this.url + '/answer/'+id, body, this.options);
  }

  deleteAnswer(id) {
    return this.http.delete(this.url + '/answer/'+id,  this.options);
  }

}
