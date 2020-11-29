import { Component, OnInit } from '@angular/core';
import { AdminnavService } from 'src/app/apis/adminnav.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  show:String=""
  constructor(private nav:AdminnavService) { }

  ngOnInit(): void {
    this.nav.nav$.subscribe(r=>{
      this.show = r;
    })
  }

}
