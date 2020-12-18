
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommisariatService {

  constructor(private http: HttpClient) { }
  url = "https://flahetna.herokuapp.com"
  token = localStorage.getItem('token');
  options = {
    headers: new HttpHeaders({
      'x-access-token': localStorage.getItem('token'),
    }),
  };

  get() {
    return this.http.get(this.url + '/commisariat',this.options);
  }
  getById(ex_id) {
    return this.http.get(this.url + '/commisariat/'+ex_id),this.options;
  }
  create(obj) {
    return this.http.post(this.url + '/commisariat/', obj, this.options);
  }
  update(id:string, obj){
    return this.http.put(this.url+'/commisariat/'+id,obj,this.options)
  }
  delete(id:string){
    return this.http.delete(this.url+'/commisariat/'+id,this.options)
  }
}
