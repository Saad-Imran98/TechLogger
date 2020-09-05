import { NgModule } from '@angular/core';

import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LoggerComponent} from './logger/logger.component';
import {LogsViewComponent} from './logs-view/logs-view.component';
import {TestComponentComponent} from './test-component/test-component.component';

const routes: Routes = [
  { path: 'home', component: DashboardComponent},
  { path: 'logger', component: LoggerComponent},
  {path: 'logs', component: LogsViewComponent},
  {path: 'test', component: TestComponentComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
