import { Component } from '@angular/core';
import { List } from 'immutable';

class Employee {
  name: string;
  salary: number;
  constructor(_number: number, _name?: string) {
    this.name = _name || `bob ${_number}`;
    this.salary = _number + 12;
  }
}

interface PageInfo {
  pageIndex: number;
  pageSize: number;
  length?: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  employeeList = List<any>([]);
  employeesModel = []; // Holds all employees

  pagedData = <PageInfo>{
    pageIndex: 0,
    pageSize: 25
  };

  constructor() {
    for (let i = 0; i < 1500; i++) {
      this.employeesModel.push(new Employee(i));
    }
    const model = this.employeesModel.slice(0);
    this.employeeList = List(model.slice(0, 25));
  }

  /**
   * Adds a new employee to the end of the employee list
   * @param event The name of the new employee to add
   */
  newEmployee(event) {
    const tempLoyee = new Employee(this.employeeList.size, event);
    this.employeesModel.push(tempLoyee);
    this.updateEmployeeList(this.pagedData);
    this.resetPaginator();
  }

  /**
   * Removes an employee from the list
   * @param event index of employee in list to remove
   */
  deleteEmployee(event: number) {
    this.employeesModel.splice(event, 1);
    this.updateEmployeeList(this.pagedData);
    this.resetPaginator();
  }
  /**
   * Handles paginator events
   * @param  $event The page change event info
   */
  onPageChange($event: PageInfo) {
    this.updateEmployeeList($event);
  }

  /**
   * Handles the heavy lifting of updating the employees that are shown
   * @param _event: PageInfo the event info necessary to update the employee list
   */
  updateEmployeeList(_event: PageInfo): void {
    if (this.pagedData !== this.pagedData) {
      this.pagedData = Object.assign({}, _event );
    }
    const model = this.employeesModel.slice(0);
    if (_event.pageIndex === 0) {
      this.employeeList = List(model.slice(0, _event.pageSize));
      return;
    }
    const start = (_event.pageIndex * _event.pageSize) + 1;
    const end = start + _event.pageSize;
    this.employeeList = List(model.slice(start, end));
  }

  resetPaginator() {
    this.pagedData = <PageInfo>{
      pageIndex: 0,
      pageSize: 25
    };
  }

}
