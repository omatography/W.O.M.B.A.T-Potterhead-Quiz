// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { of } from 'rxjs';
// import { User } from 'src/app/entities/User';
// import { LoginService } from 'src/app/services/loginservice.service';
// import { SearchPipe } from '../../pipes/search.pipe'
// import { LoginComponent } from './login.component';

// describe('LoginComponent', () => {
//   let component: LoginComponent;
//   let fixture: ComponentFixture<LoginComponent>;
//   let httpClientSpy: { get: jasmine.Spy, patch: jasmine.Spy, delete: jasmine.Spy };
//   let service: LoginService;
  

//   beforeEach(() => {
//     fixture = TestBed.createComponent(LoginComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });


//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

  
  
// });

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchPipe } from '../../pipes/search.pipe';
import {of} from 'rxjs';
import { LoginService } from 'src/app/services/loginservice.service';
import { LoginComponent } from './login.component';
import { User } from 'src/app/entities/User';

describe('ViewWorkoutsComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  // View Workout components needs a dummy/fake service .. Using fake HttpService
  let service: LoginService;
  let httpClientSpy: { get: jasmine.Spy, patch: jasmine.Spy, delete: jasmine.Spy };

  beforeEach(async () => {

    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'patch', 'delete']);
    service = new LoginService(httpClientSpy as any);

    await TestBed.configureTestingModule({
      declarations: [ LoginComponent, SearchPipe ],
      providers: [
        LoginComponent,
        { provide: LoginService, useValue: service }
      ]
    })
    .compileComponents();

    
   

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



  it('fetch all workouts', () => {
    const users: User[] = [{
      "id":1,
      "username":"omatography",
      "password":"12345"
    }
  ]
   
    httpClientSpy.get.and.returnValue(of(users));
    component.ngOnInit();
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');

    // If template changes happen
    fixture.detectChanges();

    const userElement: HTMLElement = fixture.nativeElement;
    const td= userElement.querySelector('.title')!;
    console.log(td)
    expect(td.textContent).toEqual('Running');

    // const therow= workoutElement.querySelector('.table');
    // console.log(therow)

    const tdCals= userElement.querySelector('.totalcals')!;
    console.log(tdCals)
   
    expect(tdCals.textContent).toBe('46');

    
  });


  


});
