import * as core from '@angular/core';
import { UserSettings } from '../data/user-settings';
import { NgForm, NgModel } from '@angular/forms';
import { DataService } from '../data/data.service';
import { Observable } from 'rxjs';

@core.Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements core.OnInit {

  originalUserSettings: UserSettings = {
    name: null,
    emailOffer: null,
    interfaceStyle: null,
    subscriptionType: null,
    notes:  null
  }

  singleModel = 'on';
  startDate: Date;

  userSettings: UserSettings = { ...this.originalUserSettings };
  postError: boolean;
  postErrorMessage: string;
  subscriptionTypes: Observable<string[]>;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.subscriptionTypes = this.dataService.getSubscriptionType();
    this.startDate = new Date();
  }

  onBlur(field: NgModel){
    console.log('Is the form submited:', field.valid);
  }

  onSubmit(form: NgForm){
    console.log('Is the form submited:', form.value);

    // if(form.valid){
    //   this.dataService.postUsersettingsForm(this.userSettings).subscribe(
    //     result => console.log('Success', result),
    //     error => this.onHttpError( error)
    //   );
    // } else {
    //   this.postError = true;
    //   this.postErrorMessage = 'Please fix the above errors';
    // }

  }
  onHttpError(errorResponse: any){
    console.log("Method not implemented.", errorResponse);
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;
  }

}
