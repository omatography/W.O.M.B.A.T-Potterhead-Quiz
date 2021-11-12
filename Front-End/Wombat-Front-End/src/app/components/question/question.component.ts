import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
  public resultList: Array<number> = [];
  public prev:any;
  public nex:any;
  public a:any;
  public b:any;
  public c:any;
  public d:any;
  ; 
  

  
  
  
  constructor(private quizservice:QuizService,private elRef:ElementRef) {
    
   }

  ngOnInit(): void {
    this.quizservice.fetchallusers()
    .subscribe((res:any)=>{
      this.quiz = res;
      this.qnList = res[3].questions;
      console.log(this.qnList)
      this.currentQn[0] = this.qnList[this.currentQnNo];
      console.log(this.currentQn[0])
      this.prev = this.elRef.nativeElement.querySelector('#prev');
      this.nex = this.elRef.nativeElement.querySelector('#next');
       this.a = this.elRef.nativeElement.querySelector('#a');
       this.b = this.elRef.nativeElement.querySelector('#b');
       this.c = this.elRef.nativeElement.querySelector('#c');
       this.d = this.elRef.nativeElement.querySelector('#d');
      this.disprev();
      for(var i=0;i<this.qnList.length; i++){
        this.resultList.push(-1)
      }
      this.displaySelectedAns()
      
      
      
    })
  }

  displaySelectedAns(){
    if(this.resultList[this.currentQnNo] == -1){

    }
    if(this.resultList[this.currentQnNo] == 0){
      this.noborder();
      this.a.classList.add("white")
    }
    if(this.resultList[this.currentQnNo] == 1){
      this.noborder();
      this.b.classList.add("white")
    }
    if(this.resultList[this.currentQnNo] == 2){
      this.noborder();
      this.c.classList.add("white")
    }
    if(this.resultList[this.currentQnNo] == 3){
      this.noborder();
      this.d.classList.add("white")
    }
  }
  noborder(){
    this.a.classList.remove("white")
    this.b.classList.remove("white")
    this.c.classList.remove("white")
    this.d.classList.remove("white")
  }
  ansa(){
    this.resultList[this.currentQnNo] = 0;
    console.log(this.resultList);
    
    if(this.currentQnNo >= 0){
      this.enaprev();
    }
    if(this.currentQnNo == this.qnList.length -2){
      this.disnext();
    }

    if(this.currentQnNo >= this.qnList.length -1){
      
    }else{
      ++this.currentQnNo;
      this.currentQn[0] = this.qnList[this.currentQnNo];
      this.displaySelectedAns()
    }

    
    
  }
  ansb(){
    this.resultList[this.currentQnNo] = 1;
    console.log(this.resultList);
    
    if(this.currentQnNo >= 0){
      this.enaprev();
    }
    if(this.currentQnNo == this.qnList.length -2){
      this.disnext();
    }
    if(this.currentQnNo >= this.qnList.length -1){
      
    }else{
      ++this.currentQnNo;
      this.currentQn[0] = this.qnList[this.currentQnNo];
      this.displaySelectedAns()
    }
    
  }
  ansc(){
    this.resultList[this.currentQnNo] = 2;
    console.log(this.resultList);
   
    if(this.currentQnNo >= 0){
      this.enaprev();
    }
    if(this.currentQnNo == this.qnList.length -2){
      this.disnext();
    }
    if(this.currentQnNo >= this.qnList.length -1){
      
    }else{
      ++this.currentQnNo;
      this.currentQn[0] = this.qnList[this.currentQnNo];
      this.displaySelectedAns()
    }
    
  }
  ansd(){
    this.resultList[this.currentQnNo] = 3;
    console.log(this.resultList);
    
    if(this.currentQnNo >= 0){
      this.enaprev();
    }
    if(this.currentQnNo == this.qnList.length -2){
      this.disnext();
    }
    if(this.currentQnNo >= this.qnList.length -1){
      
    }else{
      ++this.currentQnNo;
      this.currentQn[0] = this.qnList[this.currentQnNo];
      this.displaySelectedAns()
    }
    
  }
  disprev(){
    this.prev.classList.add("d-none")
  }
  enaprev(){
    this.prev.classList.remove("d-none")
  }

  disnext(){
    this.nex.classList.add("d-none")
  }

  enanext(){
    this.nex.classList.remove("d-none")
  }

  previous(){
    if(this.currentQnNo >= 1){
      --this.currentQnNo;
      this.currentQn[0] = this.qnList[this.currentQnNo];
      this.displaySelectedAns()
    }
    if(this.currentQnNo == 0){
      this.disprev();
    }
    if(this.currentQnNo == (this.qnList.length - 2)){
      this.enanext();
    }
  }

  next(){
    if(this.currentQnNo < (this.qnList.length - 1)){
      
      ++this.currentQnNo;
      this.currentQn[0] = this.qnList[this.currentQnNo];
      this.displaySelectedAns()

    } else if(this.currentQnNo == (this.qnList.length - 1)){
      this.currentQnNo = this.qnList.length - 1;
      
    }
    if(this.currentQnNo == (this.qnList.length - 1)){
      this.disnext();
    }
    
    if(this.currentQnNo == 1){
      this.enaprev();
    }
  }

}
