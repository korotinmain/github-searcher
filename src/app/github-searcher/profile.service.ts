import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';

const CLIENT_ID = '3232f17992e4ea4ffa62';
const CLIENT_SECRET = '9ce429ddfb39a59730712f8e245f645ae06c1212';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) {}

  getProfile(username: string): Observable<any> {
    return this.http
      .get(`https://api.github.com/users/${username}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`)
      .pipe(debounceTime(1000))
      .pipe(map((response: Response) => response));
  }
}
