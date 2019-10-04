import { Component, OnInit } from '@angular/core';
import {SwUpdate} from '@angular/service-worker';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  update: boolean = false;
  constructor(updates: SwUpdate) {
  updates.available.subscribe(event => {

    updates.activateUpdate().then(() => document.location.reload());
  });  
}

    

  ngOnInit() {
  }

}
