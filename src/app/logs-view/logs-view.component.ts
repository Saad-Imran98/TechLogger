import { Component, OnInit } from '@angular/core';
import {IssueService} from '../issue.service';
import {Issue} from '../../Issue';

@Component({
  selector: 'app-logs-view',
  templateUrl: './logs-view.component.html',
  styleUrls: ['./logs-view.component.css']
})
export class LogsViewComponent implements OnInit {

  public log: Issue[] = [];

  constructor(private issueService: IssueService) { }

  ngOnInit(): void {
    this.issueService.getIssues()
      .subscribe(data => this.log = data);
  }

}
