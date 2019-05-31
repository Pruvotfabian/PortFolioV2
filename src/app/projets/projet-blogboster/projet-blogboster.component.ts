import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-projet-blogboster',
  templateUrl: './projet-blogboster.component.html',
  styleUrls: ['./projet-blogboster.component.css']
})
export class ProjetBlogbosterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      $('.backcolor').addClass('active');
    }, 1000);
  }

}
