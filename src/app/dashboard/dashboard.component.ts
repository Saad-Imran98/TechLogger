import { Component, OnInit } from '@angular/core';
import {Issue} from '../../Issue';
import {IssueService} from '../issue.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  logs: Issue[] = [];

  constructor(private issueService: IssueService) { }

  ngOnInit(): void {
    this.issueService.getIssues()
      .subscribe(data => this.logs = data);
  }

}
