import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminnavService } from 'src/app/apis/adminnav.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {
  user
  constructor(private nav:AdminnavService,private router: Router) { }
  ngOnInit(): void {
    this.nav.myMethod('home')
    this.user = JSON.parse(localStorage.getItem('user'))
  }
  home(){ this.nav.myMethod('home')}
  news(){ this.nav.myMethod('news')}
  article(){ this.nav.myMethod('article')}
  expert(){ this.nav.myMethod('expert')}
  users(){ this.nav.myMethod('users')}
  quotas(){ this.nav.myMethod('quotas')}
  product(){ this.nav.myMethod('product')}
  commisariat(){ this.nav.myMethod('commisariat')}
  events(){
    this.nav.myMethod('event')
  }
  logout(){
  
      localStorage.clear(); 
      this.router.navigateByUrl('/');
  }

}
