import { Component, OnInit } from '@angular/core';
import {Issue} from '../../Issue';
import {animate, style, transition, trigger} from '@angular/animations';
import {FirebaseIssueService} from '../firebase-issue.service';
import {MatDialog} from '@angular/material/dialog';
import {EditDialogComponent} from '../edit-dialog/edit-dialog.component';
import {DeleteDialogComponent} from '../delete-dialog/delete-dialog.component';
import {MessageService} from '../message.service';

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
  dialogIssue: Issue = new Issue();
  durationInMilliSeconds = 1000;

  constructor(private issueService: FirebaseIssueService,
              private messageService: MessageService,
              private editDialog: MatDialog,
              private deleteDialog: MatDialog) {}


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
    const dialogRef = this.editDialog.open(EditDialogComponent, {
      width: '250px',
      data: this.dialogIssue
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.issueService.updateIssue({
          issue: result.issue,
          fix: result.fix,
          os: issue.os,
          id: issue.id
        });
      }
      if (!this.isEqual(result, issue)){this.messageService.openSnackBar(this.durationInMilliSeconds); }
    });
  }

  openDeleteDialog(issue: Issue): void {
    const dialogRef = this.deleteDialog.open(DeleteDialogComponent);

    dialogRef.afterClosed().subscribe(result => { console.log(result); if (result){this.delete(issue); }});
  }

  getMessage(): string {
    return this.messageService.getMessage();
  }

  isEqual(issue: Issue, otherIssue: Issue): boolean{
    return otherIssue.issue === issue.issue && otherIssue.fix === issue.fix ;
  }
}
