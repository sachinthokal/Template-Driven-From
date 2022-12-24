import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Template-Driven-Form';

  Username: string = 'Sachin';
  Password: string = '12345';
  Mobile: number = 88171399;

  onFormSubmit(userForm: NgForm) {
    console.log(userForm.value);
    this.Username = userForm.controls['username'].value;
    this.Password = userForm.controls['Pass'].value;
    this.Mobile = userForm.controls['Mob'].value;
  }
}
