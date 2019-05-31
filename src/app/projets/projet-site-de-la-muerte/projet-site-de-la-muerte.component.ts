import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-projet-site-de-la-muerte',
  templateUrl: './projet-site-de-la-muerte.component.html',
  styleUrls: ['./projet-site-de-la-muerte.component.css']
})
export class ProjetSiteDeLaMuerteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      $('.backcolor').addClass('active');
    }, 1000);
  }

}
