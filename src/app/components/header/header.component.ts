import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {



    $(window).scroll(function() {
      $('.slidedUp').each(function(){
      var imagePos = $(this).offset().top;
  
      var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + $( window ).height()) {
          $(this).addClass("slideUp");
        }
      });
    });

    $(window).scroll(function() {
      $('.fadedIn').each(function(){
      var imagePos = $(this).offset().top;
  
      var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+ $( window ).height()) {
          $(this).addClass("fadeIn");
        }
      });
    });

  }

}
