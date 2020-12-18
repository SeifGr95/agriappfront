import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private http: HttpClient) { }
  url = "https://flahetna.herokuapp.com"
  token = localStorage.getItem('token')
  getproduit() {
    return this.http.get(this.url + '/product')
  }

  addproduit(body) {
    return this.http.post(this.url + '/product', body, { headers: { 'x-access-token': this.token } })
  }

  editproduit(id, body) {
    return this.http.put(this.url + '/product/' + id, body, { headers: { 'x-access-token': this.token } })
  }
  removeproduit(id) {
    return this.http.delete(this.url + '/product/' + id, { headers: { 'x-access-token': this.token } })
  }
  getpartdemarche() {
    return this.http.get(this.url + '/partdemarche', { headers: { 'x-access-token': this.token } })
  }
  addpartdemarche(body) {
    return this.http.post(this.url + '/partdemarche', body, { headers: { 'x-access-token': this.token } })
  }
  editpartdemarche(id,body) {
    return this.http.put(this.url + '/partdemarche/'+id, body, { headers: { 'x-access-token': this.token } })
  }
  removepartdemarche(id) {
    return this.http.delete(this.url + '/partdemarche/'+id, { headers: { 'x-access-token': this.token } })
  }

}