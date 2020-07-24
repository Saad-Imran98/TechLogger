import { NgModule } from '@angular/core';

import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LoggerComponent} from './logger/logger.component';
import {LogsViewComponent} from './logs-view/logs-view.component';

const routes: Routes = [
  { path: 'home', component: DashboardComponent},
  { path: 'logger', component: LoggerComponent},
  {path: 'logs', component: LogsViewComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
