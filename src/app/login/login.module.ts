import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';
import { SigninComponent } from './signin/signin.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const loginRoutes : Routes = [
	{
		path : '',
		component : LoginComponent,
		children : [
			{path : '', component : SigninComponent},
			{path : 'forgot-password', component : ForgotPasswordComponent}
		]
	}
]

@NgModule({
  declarations: [LoginComponent, SigninComponent, ForgotPasswordComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(loginRoutes),
  ]
})
export class LoginModule { }
