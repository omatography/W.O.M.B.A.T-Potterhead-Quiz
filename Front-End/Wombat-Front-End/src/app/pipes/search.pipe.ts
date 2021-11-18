import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../entities/User';


@Pipe({
  name: 'searchWorkout'
})
export class SearchPipe implements PipeTransform {

  transform(user: Array<User>, searchValue: string): Array<User> {
    console.log(user);
    console.log(searchValue)

    let filteredWorkouts = user.filter(u=> u.username.toLowerCase().includes(searchValue.toLowerCase()))

    return filteredWorkouts;
  }

}