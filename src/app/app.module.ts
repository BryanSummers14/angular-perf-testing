import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ServiceWorkerModule } from '@angular/service-worker';

import {
  MatButtonModule,
  MatInputModule,
  MatListModule,
  MatDividerModule,
  MatChipsModule,
  MatCardModule,
  MatIconModule,
  MatPaginatorModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { FibPipe } from './fib.pipe';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { EmployeeComponent } from './employee/employee.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    AddemployeeComponent,
    EmployeelistComponent,
    EmployeeComponent,
    FibPipe,
    PaginatorComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-test' }),
    BrowserAnimationsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {
      enabled: environment.production
    }),
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatDividerModule,
    MatChipsModule,
    MatCardModule,
    MatIconModule,
    MatPaginatorModule
  ],
  providers: [FibPipe],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string
  ) {
    const platform = isPlatformBrowser(platformId)
      ? 'in the browser'
      : 'on the server';
    console.log(`Running ${platform} with appId=${appId}`);
  }
}
