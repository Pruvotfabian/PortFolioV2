import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-a-propos',
  templateUrl: './a-propos.component.html',
  styleUrls: ['./a-propos.component.css']
})
export class AProposComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      $('.A').click(function(){
        $('.menuA').toggleClass('active');
        $('.menuB').removeClass('active');

      });
      $('.B').click(function(){
        $('.menuA').removeClass('active');
        $('.menuB').toggleClass('active');

      });

      $('.but').click(function(){
        $('.menuA').removeClass('active');
        $('.menuB').removeClass('active');

      });

    });
  }

}
