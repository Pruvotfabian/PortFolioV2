import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-projet-arcturus',
  templateUrl: './projet-arcturus.component.html',
  styleUrls: ['./projet-arcturus.component.css']
})
export class ProjetArcturusComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      $('.backcolor').addClass('active');
    }, 1000);
  }

}
