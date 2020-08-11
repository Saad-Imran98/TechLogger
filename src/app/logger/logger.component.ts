import { Component, OnInit } from '@angular/core';
import {IssueService} from '../issue.service';
import {Issue} from '../../Issue';

@Component({
  selector: 'app-logger',
  templateUrl: './logger.component.html',
  styleUrls: ['./logger.component.css']
})
export class LoggerComponent implements OnInit {

  issues: Issue[] = [];
  constructor(private issueService: IssueService) { }

  ngOnInit(): void {
    this.getIssues();
  }

  getIssues(): void{
    this.issueService.getIssues()
      .subscribe(issues => {
        this.issues = issues;
      });
  }

  add(issue: string, fix: string, os: string): void{
    if (!issue || !fix){return; }
    this.issueService.addIssue({issue, fix, os} as Issue)
      .subscribe(newIssue => {
      this.issues.push(newIssue);
    });
  }

  delete(): void {

  }

}
