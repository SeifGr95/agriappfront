import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) {}
  url = "https://flahetna.herokuapp.com"
  token = localStorage.getItem('token');
  options = {
    headers: new HttpHeaders({
      'x-access-token': localStorage.getItem('token'),
    }),
  };

  
  getNews() {
    return this.http.get(this.url + '/news', this.options);
  }
  
  getRecentNews(limit) {
    return this.http.get(this.url + '/news/recent/'+limit, this.options);
  }

  getNewsbyId(id) {
    return this.http.get(this.url + '/news/'+id, this.options);
  }

  
  createNews(body) {
    return this.http.post(this.url + '/news',body, this.options);
  }


  updateNews(id , body) {
    return this.http.put(this.url + '/news/'+id , body, this.options);
  }


  deleteNews(id) {
    return this.http.delete(this.url + '/news/'+id, this.options);
  }


}

