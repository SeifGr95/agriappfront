import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css'],
})
export class ProfilComponent implements OnInit {
  constructor() {}
  slideIndex =0 ;
  ngOnInit(): void {
    setInterval(()=>{
      this.showSlides()
    }, 3000);
  }

  showSlides() {
    var i;
    var slides = Array.from(document.getElementsByClassName('mySlides') as HTMLCollectionOf<HTMLElement>)

    var dots = document.getElementsByClassName('dot');
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    this.slideIndex ++;
    if (this.slideIndex > slides.length) {
      this.slideIndex = 1;
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }
    console.log(this.slideIndex - 1)
    slides[this.slideIndex - 1].style.display = 'block';
    dots[this.slideIndex - 1].className += ' active';
     // Change image every 2 seconds
  }
}
