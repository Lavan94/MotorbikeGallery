import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ContactFormComponent} from "../contact-form/contact-form.component";
import {AssetUploadFormComponent} from "../../gallery/asset-upload/asset-upload-form.component";

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

  openDialog(dialogType: string) {
    dialogType === 'contact-form' ? this.dialog.open(ContactFormComponent) : this.dialog.open(AssetUploadFormComponent)
  }

}
