import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-projet-simplon-hdf',
  templateUrl: './projet-simplon-hdf.component.html',
  styleUrls: ['./projet-simplon-hdf.component.css']
})
export class ProjetSimplonHdfComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      $('.backcolor').addClass('active');
    }, 1000);
  }

}
