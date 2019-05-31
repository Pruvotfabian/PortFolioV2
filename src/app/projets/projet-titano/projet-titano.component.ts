import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-projet-titano',
  templateUrl: './projet-titano.component.html',
  styleUrls: ['./projet-titano.component.css']
})
export class ProjetTitanoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      $('.backcolor').addClass('active');
    }, 1000);
  }

}
