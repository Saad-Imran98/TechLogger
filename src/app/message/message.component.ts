import { Component, OnInit } from '@angular/core';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  messages: string[] = [];

  constructor(public messageService: MessageService) {}

  ngOnInit(): void {
    this.messages = this.messageService.messages;
  }

}
