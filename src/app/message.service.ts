import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MessageComponent} from './message/message.component';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: string[] = [];

  add(message: string): void{
    this.messages.push(message);
  }

  getMessage(): string{
    return this.messages.pop();
  }

  clear(): void{
    this.messages = [];
  }

  constructor(private snackBar: MatSnackBar) {}

  openSnackBar(durationInMilliSeconds: number): void {
    this.snackBar.openFromComponent(MessageComponent, {
      duration: durationInMilliSeconds
    });
  }
}
