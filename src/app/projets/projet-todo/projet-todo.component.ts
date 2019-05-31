import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-projet-todo',
  templateUrl: './projet-todo.component.html',
  styleUrls: ['./projet-todo.component.css']
})
export class ProjetTodoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      $('.backcolor').addClass('active');
    }, 1000);
  }

}
