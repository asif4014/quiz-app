import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactUsComponent } from '../components/contact-us/contact-us.component';

import { HomeComponent } from '../components/home/home.component';
import { QuizComponent } from '../components/quiz/quiz.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'quiz', component: QuizComponent },






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
