import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http : HttpClient) { }
  url="http://localhost:3000" 
token = localStorage.getItem('token')
id = localStorage.getItem('id')
getevent() {

  return this.http.get(this.url+'/event')
}

setFavoris(id_event){
  let body = {
    id_event: id_event, 
    id_user: this.id
  }
  return this.http.post(this.url+'/event/favoris', body)
}
getuserfavoris(){
return this.http.get(this.url+'/event/favoris/'+this.id) 

}

}