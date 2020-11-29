import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plugins } from '@capacitor/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pfeagri';

  constructor(private router: Router) { }
  ngOnInit() {
    if (localStorage.token)
      console.log("test")
    //this.router.navigate(['/agri/Acceuil'])
    else
      this.router.navigate(['/login'])
  }
}
