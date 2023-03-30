import {Component, OnInit} from '@angular/core';
import {AssetService} from "../asset.service";
import {AngularFireList} from "@angular/fire/compat/database";

@Component({
  selector: 'app-asset-gallery',
  templateUrl: './asset-gallery.component.html',
  styleUrls: ['./asset-gallery.component.sass']
})
export class AssetGalleryComponent implements OnInit {
  assetList: AngularFireList<any> | undefined;
  constructor(private assetService: AssetService) {
  }

  ngOnInit() {
    this.assetList = this.assetService.getImageDetailList();
  }

}
