import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private http : HttpClient) { }
  url="http://localhost:3000" 
token = localStorage.getItem('token')
getproduit() {

  return this.http.get(this.url+'/product')
}
}