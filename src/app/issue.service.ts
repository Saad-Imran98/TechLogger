import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Issue} from '../Issue';
import {tap} from 'rxjs/operators';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  private url = 'http://localhost:3000/issues';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient, private messageService: MessageService) { }

  getIssues(): Observable<Issue[]>{
    return this.http.get<Issue[]>(this.url);
  }

  getIssue(issue: Issue): Observable<Issue>{
    return this.http.get<Issue>(`${this.url}/${issue.id}`);
  }

  addIssue(issue: Issue): Observable<Issue> {
    return this.http.post<Issue>(`${this.url}`, issue, this.httpOptions)
      .pipe(
        tap(_ => this.messageService.add(`Added new issue with OS: ${issue.os}!`))
      );
  }

  deleteIssue(issue: Issue): Observable<Issue>{
    const url = `${this.url}/${issue.id}`;
    return this.http.delete<Issue>(url, this.httpOptions).pipe(
      tap(_ => this.messageService.add(`Deleted Issue: ${issue.id}`)
      ));
  }
}
