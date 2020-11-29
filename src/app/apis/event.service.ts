import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventModel } from '../agriculture/events/event.model';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor(private http: HttpClient) {}
  url = 'http://localhost:3000';
  token = localStorage.getItem('token');
  id = localStorage.getItem('id');
  getevent() {
    console.log("service")
    return this.http.get(this.url + '/event');
  }
  createevent(event: EventModel) {
    console.log(this.token);
    
    return this.http.post(this.url + '/event/', event, {headers: {'x-access-token': this.token}});
  }
  updateEvent(id:string, event:EventModel){
    return this.http.put(this.url+'/event/'+id,event,{headers: {'x-access-token': this.token}})
  }
  deleteEvent(ev_id:string){
    return this.http.delete(this.url+'/event/'+ev_id,{headers: {'x-access-token': this.token}})
  }
  setFavoris(id_event) {
    let body = {
      id_event: id_event,
      id_user: this.id,
    };
    return this.http.post(this.url + '/event/favoris', body);
  }
  getuserfavoris() {
    let token = localStorage.getItem('token');
    return this.http.get(this.url + '/event/favoris/' + this.id, {
      headers: {
        'x-access-token': token,
      },
    });
  }
  addEventToFavoris(eventId) {
    let userid = localStorage.getItem('id');
    let token = localStorage.getItem('token');
    return this.http.put(
      this.url + '/users/addfavoris/' + userid,
      {
        eventID: userid,
      },
      { headers: { 'x-access-token': token } }
    );
  }
}