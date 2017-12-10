import {Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {AppService} from '../app.service';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  public dataValue;

  @Output() dataChange = new EventEmitter();
  @Input()
  get data() {
    return this.dataValue;
  }

  set data(val) {
    this.dataValue = val;
    this.dataChange.emit(this.dataValue);
  }

  constructor(private serv: AppService) {
    this._list = this.serv.list;
  }

  public _list;

  get list() {
    return this.serv.list;
  }
  set list(val) {
    this.serv.list = val;
  }
  ngOnInit() {
    console.log('init ch', this.dataValue);
  }
  decrease() {
    this.data += '0';
    this.list = [1, 1, 1, 1];
  }

}
