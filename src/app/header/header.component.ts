import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      $('.header').click(function(){
        $('.menu').toggleClass('active');
        $('.header').toggleClass('active');
        $('.block').toggleClass('active');
      });
      $('a').click(function(){
        $('.menu').removeClass('active');
        $('.header').removeClass('active');
        $('.block').removeClass('active');
      });
    });
  }

}