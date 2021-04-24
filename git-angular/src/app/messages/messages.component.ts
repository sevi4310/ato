import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {MsgservService} from '../msgserv.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  testId = 0;
  message = '';
  myTextarea = '';
  clickMessage : any = '';
  constructor(private msgServ: MsgservService ) {}

  ngOnInit(): void {
  }

  onClickMe() {
    this.testId++;
    this.clickMessage = this.message + " " + this.myTextarea;
    // this.clickMessage = this.msgServ.getPalindromes("");
    this.clickMessage = this.msgServ.getPalindromes(this.message, this.myTextarea).subscribe(data => {
      console.log(this.clickMessage );
      this.clickMessage = data.msg;
    });

  }

}
