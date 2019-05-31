import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-projet-empire',
  templateUrl: './projet-empire.component.html',
  styleUrls: ['./projet-empire.component.css']
})
export class ProjetEmpireComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  setTimeout(() => {
    $('.backcolor').addClass('active');
  }, 1000);
  }

}
