import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Issue} from '../Issue';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  private url = 'http://localhost:3000/issues';

  constructor(private http: HttpClient) { }

  getIssue(issue: Issue): Observable<Issue>{
    return this.http.get<Issue>(`${this.url}/${issue.id}`);
  }
}
