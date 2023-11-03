// 


import { Component, OnInit } from '@angular/core';

declare var $: any; // Declare jQuery

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {
    // Initialize the carousel
    $(document).ready(() => {
      $('#cricketCarousel').carousel();
    });
  }
}
