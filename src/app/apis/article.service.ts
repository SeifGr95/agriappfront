import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }
  url = "http://localhost:3000"
  token = localStorage.getItem('token')
  options = {
    headers: new HttpHeaders({ 'x-access-token': localStorage.getItem('token') })
  }
  getarticle() {

    return this.http.get(this.url + '/article', this.options)
  }
  getarticlebyId(id) {
    return this.http.get(this.url + '/article/'+id, this.options);
  }

  
  createarticle(body) {
    return this.http.post(this.url + '/article',body, this.options);
  }


  updatearticle(id , body) {
    return this.http.put(this.url + '/article/'+id , body, this.options);
  }


  deletearticle(id) {
    return this.http.delete(this.url + '/article/'+id, this.options);
  }
}