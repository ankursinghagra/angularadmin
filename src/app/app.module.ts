import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { LoginModule } from './login/login.module';
import { HomeModule } from './home/home.module';

const routes : Routes =[
	{
		path : '', redirectTo : 'login', pathMatch : 'full'
	},
	{
		path : 'login',
		loadChildren: () => LoginModule
	},
	{
		path : 'home',
		loadChildren: () => HomeModule
	}
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes,{
    	useHash:true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
