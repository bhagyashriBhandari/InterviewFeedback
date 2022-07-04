import {  Component, OnInit } from '@angular/core';
import { FeedbackService } from 'src/app/Service/feedback.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private fbServe: FeedbackService) { }

 
  ngOnInit(): void {
  



  }
 
}
