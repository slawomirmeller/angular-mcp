import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {messages, ProcessMessage} from "../process-message";

@Component({
  selector: 'app-process-messages',
  templateUrl: './process-messages.component.html',
  styleUrls: ['./process-messages.component.css']
})
export class ProcessMessagesComponent implements OnInit{

  processCode: String | undefined;
  processId: String | undefined;
  messages: ProcessMessage[] | undefined;
  ngOnInit(): void {

    const routeParams = this.route.snapshot.paramMap;
    this.processCode = String(routeParams.get('processCode'));
    this.processId = String(routeParams.get('processId'));
    this.messages = messages;

  }

  getMessageTypeClass(type: string) {
    switch (type) {
      case 'Info':
        return 'bg-success';
      case 'Critical':
        return 'bg-danger';
      default:
        return 'bg-warning';
    }

  }

  constructor(
    private route: ActivatedRoute,
  ) {
  }

}
