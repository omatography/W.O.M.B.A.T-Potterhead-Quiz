import { Component, ElementRef, OnInit } from '@angular/core';
import { Question } from 'src/app/entities/Question';
import { QuizService } from 'src/app/services/quizservice.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  public correctAns:Array<number> = [];
  public userAns:Array<number> = [];
  public result:number[] = [];
  public percent:number = 0;
  constructor(private quizservice:QuizService,private elRef:ElementRef) { }

  ngOnInit(): void {
    this.userAns = environment.resultArray;
    var cor:number;
    var i=0;
    this.quizservice.fetchallusers()
    .subscribe((res:any)=>{
      cor = 0;
      res[3].questions.forEach((t:Question)=>{
        
        if(t.answer == this.userAns[i]){
          cor = cor + 1
          
        }
        i++
      
      })
      this.result[0] = cor;
      this.evaluateResult()
    
    });
   
  }

  evaluateResult(){
    console.log(this.result[0])
    this.percent = Math.floor((this.result[0]/this.userAns.length)*100)
    this.caption()
    
  }

  caption(){
    var t = this.elRef.nativeElement.querySelector('#caption');
    if(this.percent > 50){
      t.innerHTML = "Hurray!, you have proved yourself, a True PotterHead. View your detailed score below."
    }else{
      t.innerHTML = "Seems like you need Improvement. Better luck next time! View your detailed score below."
    }
  }

 
  
}
