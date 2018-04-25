import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

import { Container } from '../utils';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent extends Container implements OnInit, OnChanges {

  @Input() totalItems = 0;
  @Input() pagedInfo: any;
  @Output() pageChange: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
    super();
  }

  ngOnInit() {
    this.state = {
      index: 0,
      size: 25
    };
  }

  ngOnChanges(changes: any) {
    if (changes['pagedInfo']) {
      this.setState(() => ({
        index: changes['pagedInfo']['currentValue']['pageIndex'],
        size: changes['pagedInfo']['currentValue']['pageSize']
      }));
    }
  }

  pageEvent(_event) {
    this.setState(() => ({
      index: _event.pageIndex,
      size: _event.pageSize
    }));
    this.pageChange.emit(_event);
  }

}
