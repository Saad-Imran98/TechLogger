import { Component, OnInit } from '@angular/core';
import {Issue} from '../../Issue';
import {FirebaseIssueService} from '../firebase-issue.service';

@Component({
  selector: 'app-logs-view',
  templateUrl: './logs-view.component.html',
  styleUrls: ['./logs-view.component.css']
})
export class LogsViewComponent implements OnInit {

  public log: Issue[] = [];

  constructor(private issueService: FirebaseIssueService) { }

  // deleteIssue(issue: Issue): void{
  //   this.issueService.deleteIssue(issue).subscribe();
  // }

  ngOnInit(): void {
    this.issueService.getIssues()
      .subscribe(data => this.log = data);
  }

}
