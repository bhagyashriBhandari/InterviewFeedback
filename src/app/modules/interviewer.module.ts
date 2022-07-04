import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';

import { InterviewerDashboardComponent } from './interviewer-dashboard/interviewer-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './interviewer-dashboard/home/home.component';
import { FeedbackFormComponent } from './interviewer-dashboard/feedback-form/feedback-form.component';
import { CandidateDetailsComponent } from './interviewer-dashboard/candidate-details/candidate-details.component';




const route: Route | any = [
  {path:'', component:InterviewerDashboardComponent,children:[
    {path:'home', component: HomeComponent},
    {path:'feedback', component: FeedbackFormComponent},
    {path:'candidateDetails', component: CandidateDetailsComponent}
  ]}
];

@NgModule({
  declarations: [
    HomeComponent,
    FeedbackFormComponent,
    InterviewerDashboardComponent,
    CandidateDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(route)
  ]
})
export class InterviewerModule { }
