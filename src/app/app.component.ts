import { OnInit, Component } from '@angular/core';
import {AppService} from './app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(private serv: AppService) {
  }

  get servValue() {
    return this.serv.list;
  }
  set servValue(val) {
    this.serv.list = val;
  }

  dec() {
    this.servValue = [2, 2, 2, 2, 2];
  }
  ngOnInit() {
    console.log('init app');
  }
}
