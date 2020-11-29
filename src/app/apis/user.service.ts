import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }
  url="http://localhost:3000"
  token = localStorage.getItem('token');

  createUser(body){
    return this.http.post(this.url+'/users' , body)
  }
  getAll(){
    return this.http.get(this.url+'/users/',{headers: {'x-access-token': this.token}})
  }
  delete(id){
    return this.http.delete(this.url+'/users/'+id,{headers: {'x-access-token': this.token}})
  }

  login(body) {
  return this.http.post(this.url+'/users/login' , body) }

  contact(body) {
    return this.http.post(this.url+'/contact' , body) }


updateemail(id, email) {
  console.log(email)
  return this.http.put(this.url+'/users/updateemail/'+ id , {email: email} , {headers: {'x-access-token': this.token}}) }

  updatepwd(id, oldpwd , newpwd) {
    return this.http.put(this.url+'/users/updatepwd/'+ id , {psw: oldpwd , newpwd : newpwd  } , {headers: {'x-access-token': this.token}}) }
  
getusernotification (email) {
  return this.http.get(this.url+'/users/getnotif/'+email,{headers: {'x-access-token': this.token}})

}

getagriNotification (id) {
  return this.http.get(this.url+'/users/getnotifagri/'+id,{headers: {'x-access-token': this.token}})

}

}
