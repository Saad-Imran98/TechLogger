import { Component, OnInit } from '@angular/core';
import {IssueService} from '../issue.service';
import {Issue} from '../../Issue';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MessageComponent} from '../message/message.component';
import {MessageService} from '../message.service';
import {pipe} from 'rxjs';
import {FirebaseIssueService} from '../firebase-issue.service';

@Component({
  selector: 'app-logger',
  templateUrl: './logger.component.html',
  styleUrls: ['./logger.component.css']
})
export class LoggerComponent implements OnInit {

  messages: string[];
  issues: Issue[] = [];
  durationInMilliSeconds = 5000;
  constructor(private issueService: FirebaseIssueService, private snackBar: MatSnackBar, private messageService: MessageService) { }

  openSnackBar(): void {
    this.snackBar.openFromComponent(MessageComponent, {
      duration: this.durationInMilliSeconds
    });
  }
  //
  // getMessages(): void{
  //   this.messages = this.messageService.getMessages();
  // }

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
    if (!os){
      os = 'All';
    }
    const id = 7;
    this.issueService.addIssue({id, issue, os, fix} as Issue);
    // this.issueService.addIssue({issue, fix, os, id} as Issue)
    //   .subscribe(newIssue => {
    //   this.issues.push(newIssue);
    // });
    this.openSnackBar();
  }

  delete(): void {

  }

}
