import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http : HttpClient) { }
  url="http://localhost:3000" 
token = localStorage.getItem('token')
getarticle() {

  return this.http.get(this.url+'/article')
}
}