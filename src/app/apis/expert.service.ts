import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExpertService {

  constructor(private http: HttpClient) { }
  url = "https://flahetna.herokuapp.com"
  token = localStorage.getItem('token');
  options = {
    headers: new HttpHeaders({
      'x-access-token': localStorage.getItem('token'),
    }),
  };

  getAllsecteur() {
    return this.http.get(this.url + '/secteur',this.options);
  }
  GetByName(title) {
    return this.http.get(this.url + '/secteur/getbyname/'+title,this.options);
  }


  getExpert() {
    return this.http.get(this.url + '/expert',this.options);
  }
  getExpertbyId(ex_id) {
    return this.http.get(this.url + '/expert/'+ex_id,this.options);
  }
  createExpert(expert) {
    return this.http.post(this.url + '/expert/', expert, this.options);
  }
  updateExpert(id:string, expert){
    return this.http.put(this.url+'/expert/'+id,expert,this.options)
  }
  deleteExpert(ex_id:string){
    return this.http.delete(this.url+'/expert/'+ex_id,this.options)
  }
}
