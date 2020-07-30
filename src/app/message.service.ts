import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: string[] = [];

  add(message: string): void{
    this.messages.push(message);
  }
  getMessages(): string[]{
    return this.messages;
  }
  clear(): void{
    this.messages = [];
  }

  constructor() { }

}
