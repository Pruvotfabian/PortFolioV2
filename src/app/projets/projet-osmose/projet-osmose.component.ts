import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-projet-osmose',
  templateUrl: './projet-osmose.component.html',
  styleUrls: ['./projet-osmose.component.css']
})
export class ProjetOsmoseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      $('.backcolor').addClass('active');
    }, 1000);
  }

}
