import { Component, OnInit } from '@angular/core';
import { ChargementService } from '../service/chargement.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  chargement: boolean = true;
  constructor(public cS: ChargementService) {
    
  }

  ngOnInit() {
 
  }

}
