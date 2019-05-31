import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-projet-empirev2',
  templateUrl: './projet-empirev2.component.html',
  styleUrls: ['./projet-empirev2.component.css']
})
export class ProjetEmpirev2Component implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      $('.backcolor').addClass('active');
    }, 1000);
  }

}
