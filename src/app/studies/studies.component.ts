import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css']
})
export class StudiesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let next = document.querySelector('.next');
    let prev = document.querySelector('.prev');
    let slider = document.querySelector('.slider');

    setInterval(() => {
      let slides = document.querySelectorAll('.slides');
      slider?.appendChild(slides[0]);
    }, 3000);


    next?.addEventListener('click', function () {
      let slides = document.querySelectorAll('.slides');
      slider?.appendChild(slides[0]);
    })

    prev?.addEventListener('click', function () {
      let slides = document.querySelectorAll('.slides');
      slider?.prepend(slides[slides.length - 1]);
    })


  }

}
