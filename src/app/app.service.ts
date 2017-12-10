import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
  private static count = 0;
  private _list: Number[] = [0, 0, 0, 2, 3, 4];
  public get list() {
    return this._list;
  }
  public set list(val) {
    this._list = val;
  }
  constructor() {
    console.log('init serv:', ++AppService.count);
  }

}
