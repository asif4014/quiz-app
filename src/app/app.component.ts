import { Component } from '@angular/core';
import { Feedback } from './feedback';

import { QuizComponent } from './components/quiz/quiz.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  feedbackModel = new Feedback('Monu', 'monuc4014@gmail.com', 'Hey,there....');
}
