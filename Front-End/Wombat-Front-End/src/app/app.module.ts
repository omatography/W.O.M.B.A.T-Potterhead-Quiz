import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { QuestionComponent } from './components/question/question.component';
import { ResultComponent } from './components/result/result.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { DetailedResultComponent } from './components/detailed-result/detailed-result.component';
import { EditComponent } from './components/edit/edit.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
const routes:Routes = [
  { path: '', pathMatch: 'full', component:LoginComponent},
  {path:'home', component:HomeComponent },
  {path:'question', component:QuestionComponent},
  {path:'result', component:ResultComponent},
  {path:'detailed', component:DetailedResultComponent},
  {path:'edit',component:EditComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    QuestionComponent,
    ResultComponent,
    DetailedResultComponent,
    EditComponent,
    AboutComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routes),
    NgCircleProgressModule.forRoot({
      // set defaults here
      "backgroundColor": "#101010",
      "radius": 60,
      "maxPercent": 200,
      "units": " Point",
      "unitsColor": "#483500",
      "outerStrokeWidth": 5,
      "outerStrokeColor": "#FFFFFF",
      "innerStrokeColor": "#FFFFFF",
      "titleColor": "#ffffff",
      "subtitleColor": "#ffffff",
      "titleFontSize": "50",
      "titleFontWeight": "500",
      "showUnits": false,
      "showSubtitle": false,
      "showInnerStroke": false,
      "startFromZero": false
      
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
