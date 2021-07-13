import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SideNavServiceService {

sideNavTrigger=new Subject();

triggerSideNav()
{
  console.log("service called")
 this.sideNavTrigger.next(true)
}

}
