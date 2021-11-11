import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/entities/Question';
import { Quiz } from 'src/app/entities/Quiz';
import { QuizService } from 'src/app/services/quizservice.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  public quiz:Array<Quiz> = [];
  public qnList:Array<Question> = [];
  public currentQn:Array<Question> = [];
  public currentQnNo: number = 0;
  
  
  constructor(private quizservice:QuizService) { }

  ngOnInit(): void {
    this.quizservice.fetchallusers()
    .subscribe((res:any)=>{
      this.quiz = res;
      this.qnList = res[0].questions;
      console.log(this.qnList)
      this.currentQn[0] = this.qnList[this.currentQnNo];
      console.log(this.currentQn[0])
      
      
    })
  }

}
