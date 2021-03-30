import { Component, OnInit } from '@angular/core';
import { Feedback } from '../../feedback';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  feedbackModel = new Feedback('', '', '');

  onSubmit() {
    console.log(this.feedbackModel)
  }

}
