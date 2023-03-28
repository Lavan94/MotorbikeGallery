import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ContactFormComponent} from "../contact-form/contact-form.component";

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.sass']
})
export class HeaderComponentComponent {
  showMenu = false
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  clickMenuButton(){
    this.showMenu = !this.showMenu;
  }
  backdropClick(){
    this.showMenu = this.showMenu !== true;
  }

  constructor(private breakpointObserver: BreakpointObserver, public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(ContactFormComponent);
  }

}
