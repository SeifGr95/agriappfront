import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }
  url="http://localhost:3000"

  createUser(body){
    return this.http.post(this.url+'/users' , body)
  }

  login(body) {
  return this.http.post(this.url+'/users/login' , body) }
}
