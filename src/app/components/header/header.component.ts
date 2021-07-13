import { Component, OnInit } from '@angular/core';
import { SideNavService } from 'src/app/services/side-nav.service';
import { SideNavServiceService } from 'src/app/material/side-nav-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private sideNavService:SideNavServiceService) { }
  toggleActive:boolean = false;

  ngOnInit(): void {

  }

  toggleRightSidenav() {
    console.log("Clicked")
 this.sideNavService.triggerSideNav();
	}
}
