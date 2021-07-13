import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

// import { matDrawerAnimations } from '@angular/material/sidenav';
import { MatSidenav } from '@angular/material/sidenav';
// import {SidenavService} from '../../components/services/sidenav.service';
import { SideNavServiceService } from '../../material/side-nav-service.service';


/** @title Sidenav with configurable mode */

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  // mode = new FormControl('over');
  // shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
  @ViewChild('drawer') public drawer: MatSidenav

  booleanValueForToggle = false;
  constructor(private service: SideNavServiceService) { }

  ngOnInit(): void {

    this.service.sideNavTrigger.subscribe(()=>
    {
      this.booleanValueForToggle = false;
      this.changeToggleValue();
      this.openSidenav();
    })
  }
  openSidenav() 
  {
    console.log('click');
    this.drawer.toggle();
  }
  changeToggleValue() 
  {
    if (this.booleanValueForToggle) {
      this.booleanValueForToggle = false;
    }
    else {
      this.booleanValueForToggle = true;
    }

  }
 changeToggleValueToNormal() {
    console.log('change value called')
    if (this.booleanValueForToggle) {
      this.drawer.close();
      setTimeout(() => { this.booleanValueForToggle = false }, 300)
    }
  }
}