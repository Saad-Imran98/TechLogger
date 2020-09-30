import { Component, OnInit } from '@angular/core';
import {Issue} from '../../Issue';
import {IssueService} from '../issue.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {AngularFireDatabase} from '@angular/fire/database';
import {FirebaseIssueService} from '../firebase-issue.service';
import {MatDialog} from '@angular/material/dialog';
import {EditDialogComponent} from '../edit-dialog/edit-dialog.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [
    trigger('fade', [

      transition('void=> *', [
        style({backgroundColor: '', opacity: 0}),
        animate(500)
      ]),

      transition('* => void', [
        animate(2000, style({opacity: 0}))
      ])
    ])
  ]
})
export class DashboardComponent implements OnInit {

  logs: Issue[] = [];
  displayedColumns: string[] = ['id', 'issue', 'fix', 'os', 'buttons'];
  issues: any[];
  issueCount: any;
  constructor(private issueService: FirebaseIssueService, private dialog: MatDialog) {}

  dialogIssue: Issue = new Issue();

  ngOnInit(): void {
    this.issueService.getIssues()
      .subscribe(data => {
        this.logs = data;
      });
  }
  delete(issue: Issue): void{
    this.issueService.deleteIssue(issue);
  }
  openDialog(issue: Issue): void {

    this.dialogIssue.issue = issue.issue;
    this.dialogIssue.fix = issue.fix;
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '250px',
      data: this.dialogIssue
    });

    dialogRef.afterClosed().subscribe(result => {
        this.issueService.updateIssue({
          issue: result.issue,
          fix: result.fix,
          os: issue.os,
          id: issue.id
        });
    });
  }

}
