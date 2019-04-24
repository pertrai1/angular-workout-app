import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
	selector: 'register',
	template: `
		<div>
			<auth-form (submiited)="registerUser($event)">
        <h1>Register</h1>
        <a routerLink="/auth/login">Already member</a>
        <button type="submit">
          Create Account
        </button>
			</auth-form>
		</div>
	`
})
export class RegisterComponent {
  registerUser(event: FormGroup) {
    console.log(event);
    console.log(event.value);
  }
}
