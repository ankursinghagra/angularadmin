import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, RouterLinkActive } from '@angular/router';

import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { SidebarComponent } from './_components/sidebar/sidebar.component';
import { HeaderComponent } from './_components/header/header.component';

import { SidebarService } from './_components/sidebar/sidebar.service';

const homeRoutes : Routes = [
	{
		path : '',
		component : HomeComponent,
		children : [
			{path : '', component : DashboardComponent},
			{path : 'settings', component : SettingsComponent}
		]
	}
]

@NgModule({
  declarations: [HomeComponent, DashboardComponent, SettingsComponent, SidebarComponent, HeaderComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes),
  ],
  providers: [SidebarService]
})
export class HomeModule { }
