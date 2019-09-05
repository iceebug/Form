import { Injectable } from '@angular/core';
import { UserSettings } from './user-settings';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  getSubscriptionType(): Observable<string[]> {
    return of(['Montly', 'Annual', 'Lifetime']);
  }

  postUsersettingsForm(userSettings: UserSettings) : Observable<any> {

    return this.http.post('https://putsreq.com/ptYzdA85KtgPl5scQHAv', userSettings);
    //return of(userSettings);
  }
}
