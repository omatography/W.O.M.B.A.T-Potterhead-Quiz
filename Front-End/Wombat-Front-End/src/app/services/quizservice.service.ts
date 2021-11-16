import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) {
  
  }

  fetchallusers(){
    return this.http.get(environment.BaseUrlQuiz)
  }

  addQuiz(quest:any){
    console.log(quest)
    
    return this.http.patch('http://localhost:9000/wombatquiz/14/addqn',quest)
  }

  deleteQn(i:number){
    console.log("ser")
    return this.http.patch('http://localhost:9000/wombatquiz/14/deleteqn/'+ i,{})
  }
}
