import { Injectable } from '@angular/core';
import { AngularFireDatabase} from '@angular/fire/database';
import {AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Issue} from '../Issue';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {MessageService} from './message.service';
@Injectable({
  providedIn: 'root'
})
export class FirebaseIssueService {

  issues: Observable<Issue[]>;
  issuesCollection: AngularFirestoreCollection<Issue>;
  issueDoc: AngularFirestoreDocument<Issue>;

  constructor(private messageService: MessageService,
              private angularFireStore: AngularFirestore) {
    this.issuesCollection = this.angularFireStore.collection('issues', ref => ref.orderBy('title', 'asc'));

    this.issues = this.angularFireStore.collection('issues').snapshotChanges()
      .pipe(
      map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as Issue;
          data.id = a.payload.doc.id;
          return data;
        });
      }));
  }

  getIssues(): Observable<Issue[]>{
    return this.issues;
  }

  addIssue(issue: Issue): void{
    this.issuesCollection.add(issue);
    this.messageService.add(`Added new issue with OS: ${issue.os}!`);
  }

  deleteIssue(issue: Issue): void {
    this.issueDoc = this.angularFireStore.doc(`issues/${issue.id}`);
    this.issueDoc.delete();
  }

  updateIssue(issue: Issue): void{
    this.issueDoc = this.angularFireStore.doc(`issues/${issue.id}`);
    this.issueDoc.update(issue);
  }
}
