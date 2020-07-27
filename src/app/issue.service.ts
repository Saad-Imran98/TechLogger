import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Issue} from '../Issue';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  private url = 'http://localhost:3000/issues';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }

  getIssues(): Observable<Issue[]>{
    return this.http.get<Issue[]>(this.url);
  }

  getIssue(issue: Issue): Observable<Issue>{
    return this.http.get<Issue>(`${this.url}/${issue.id}`);
  }

  addIssue(issue: Issue): Observable<Issue> {
    return this.http.post<Issue>(`${this.url}`, issue, this.httpOptions)
      .pipe(
        tap() // TODO: add toast service here
      );
  }
}
