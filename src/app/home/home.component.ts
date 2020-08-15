import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { SidebarService } from './_components/sidebar/sidebar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  constructor(
  	public SidebarService: SidebarService
  ) { }

  ngOnInit() {
  }

}
