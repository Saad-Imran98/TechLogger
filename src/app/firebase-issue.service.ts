import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {Issue} from '../Issue';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseIssueService {

  issues: Observable<Issue[]>;

  issuesCount: number;

  constructor(private db: AngularFireDatabase) {
    this.issues = db.list<Issue>('/issues').valueChanges();

    // db.list<number>('/count').valueChanges()
    //   .subscribe(issueCount => this.issuesCount = JSON.parse(issueCount));
    // console.log(this.issuesCount);
  }

  getIssues(): Observable<any[]>{
    return this.issues;
  }

  addIssue(issue: Issue): void{
    this.db.list('/issues').push({issue: Issue});
  }
}
