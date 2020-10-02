import { Component, OnInit } from '@angular/core';
import {Issue} from '../../Issue';
import {MessageService} from '../message.service';
import {FirebaseIssueService} from '../firebase-issue.service';

@Component({
  selector: 'app-logger',
  templateUrl: './logger.component.html',
  styleUrls: ['./logger.component.css']
})
export class LoggerComponent implements OnInit {

  issues: Issue[];
  durationInMilliSeconds = 1000;
  constructor(private issueService: FirebaseIssueService,
              private messageService: MessageService,
              ) {}

  ngOnInit(): void {
    this.issueService.getIssues()
      .subscribe(issues => {
        console.log(issues.pop());
      });
  }

  getIssues(): void{
    this.issueService.getIssues()
      .subscribe(issues => {
        this.issues = issues;
      });
  }

  add(issue: string, fix: string, os: string): void{
    if (!issue || !fix){return; }
    if (!os){
      os = 'All';
    }
    this.issueService.addIssue({issue, fix, os} as Issue);
    this.messageService.openSnackBar(this.durationInMilliSeconds);
  }

}
