import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/entities/Question';
import { Quiz } from 'src/app/entities/Quiz';
import { QuizService } from 'src/app/services/quizservice.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public quiz:Array<Quiz> = [];
  public qnList:Array<Question> = [];
  constructor(private quizservice:QuizService) { }

  ngOnInit(): void {

    this.quizservice.fetchallusers()
    .subscribe((res:any)=>{
      this.quiz[0] = res[3];
      console.log(this.quiz[0])
      this.qnList = this.quiz[0].questions;
      console.log(this.qnList)
    })

  }

}
