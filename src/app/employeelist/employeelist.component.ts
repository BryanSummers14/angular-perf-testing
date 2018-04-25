import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { LoadingState, Container } from '../utils';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeelistComponent extends Container implements OnInit {

  @Input() employees: any;
  @Output() remove: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
    super();
  }

  ngOnInit() {
  }

  onRemoveEmployee(index: number): void {
    this.setState((prevState) => ({
      removedEmployeeIndex: index
    }));
    this.remove.emit(index);
  }

  trackByFn(index, item) {
    return index;
  }

}
