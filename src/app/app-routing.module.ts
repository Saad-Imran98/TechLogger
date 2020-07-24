import { NgModule } from '@angular/core';

import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LoggerComponent} from './logger/logger.component';

const routes: Routes = [
  { path: 'home', component: DashboardComponent},
  { path: 'logger', component: LoggerComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
