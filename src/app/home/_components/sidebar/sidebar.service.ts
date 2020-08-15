import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

	sidebar_open : boolean = false;

  constructor() { }

  toggleSidebar() : void{
  	this.sidebar_open = !this.sidebar_open
  }

}
