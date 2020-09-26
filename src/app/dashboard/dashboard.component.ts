import { Component, OnInit } from '@angular/core';
import {Issue} from '../../Issue';
import {IssueService} from '../issue.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {AngularFireDatabase} from '@angular/fire/database';
import {FirebaseIssueService} from '../firebase-issue.service';


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
  constructor(private issueService: FirebaseIssueService) {}

  ngOnInit(): void {
    this.issueService.getIssues()
      .subscribe(data => {
        this.logs = data;
      });
  }
  delete(issue: Issue): void{
    this.issueService.deleteIssue(issue);
  }
}
