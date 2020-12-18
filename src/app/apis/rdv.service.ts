
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RdvService {

  constructor(private http: HttpClient) { }
  url = "https://flahetna.herokuapp.com"
  token = localStorage.getItem('token');
  options = {
    headers: new HttpHeaders({
      'x-access-token': localStorage.getItem('token'),
    }),
  };

  get() {
    return this.http.get(this.url + '/rdv',this.options);
  }
  getbyId(ex_id) {
    return this.http.get(this.url + '/rdv/'+ex_id,this.options);
  }
  create(rdv) {
    return this.http.post(this.url + '/rdv/', rdv, this.options);
  }
  update(id:string, rdv){
    return this.http.put(this.url+'/rdv/'+id,rdv,this.options)
  }
  delete(ex_id:string){
    return this.http.delete(this.url+'/rdv/'+ex_id,this.options)
  }
  updateEtat(id:string, rdv){
    return this.http.put(this.url+'/rdv/updateEtat/'+id,rdv,this.options)
  }

}

