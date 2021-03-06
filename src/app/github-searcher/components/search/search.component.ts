import { Component } from '@angular/core';
import { ProfileService } from '../../profile.service';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  public searchString = '';
  public user: any;
  public minLength: number = 3;

  constructor(private profile: ProfileService) { }

  public handleChange() {
    if (this.searchString.length > this.minLength){
      this.profile.getProfile(this.searchString)
      .pipe(debounceTime(500))
      .subscribe(user => {
        return this.user = user;
      });
    }
  }
}
