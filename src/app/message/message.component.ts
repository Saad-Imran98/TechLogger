import { Component, OnInit } from '@angular/core';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  message = '';
  constructor(public messageService: MessageService) {}

  ngOnInit(): void { this.getMessage(); }

  getMessage(): void{
    this.message = this.messageService.getMessage();
  }
}
