import { Component, OnInit, Output, EventEmitter, ElementRef } from '@angular/core';

import { LoadingState, Container } from './../utils';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.scss']
})
export class AddemployeeComponent extends Container implements OnInit {

  @Output() add: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
    super();
  }

  ngOnInit() {
    if (this.isLoading) {
      console.log('is loading');
    }
    this.loadingStatus = LoadingState.Loaded;
  }

  addEmployee(inputRef: ElementRef) {
    console.log(this.isLoading);
    this.setState((curState) => ({
      latestEmployee: inputRef['value']
    }));
    this.add.emit(inputRef['value']);
    inputRef['value'] = '';
  }

}
