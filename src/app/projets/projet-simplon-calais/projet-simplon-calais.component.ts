import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-projet-simplon-calais',
  templateUrl: './projet-simplon-calais.component.html',
  styleUrls: ['./projet-simplon-calais.component.css']
})
export class ProjetSimplonCalaisComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      $('.backcolor').addClass('active');
    }, 1000);
  }

}
