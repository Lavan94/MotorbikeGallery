import {Component, OnInit} from '@angular/core';
import {AssetService} from "../asset.service";

@Component({
  selector: 'app-asset-gallery',
  templateUrl: './asset-gallery.component.html',
  styleUrls: ['./asset-gallery.component.sass']
})
export class AssetGalleryComponent implements OnInit {

  constructor(private assetService: AssetService) {
  }

  ngOnInit() {
    this.assetService.getImageDetailList();
  }

}
