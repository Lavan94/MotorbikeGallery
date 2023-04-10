import {Component, OnInit} from '@angular/core';
import {AssetService} from "../asset.service";
import {Asset} from "../Asset";
import {MatDialog} from "@angular/material/dialog";
import {AssetRotatorComponent} from "./asset-rotator/asset-rotator.component";

@Component({
  selector: 'app-asset-gallery',
  templateUrl: './asset-gallery.component.html',
  styleUrls: ['./asset-gallery.component.sass']
})
export class AssetGalleryComponent implements OnInit {
  assetCategoryMap: Map<string, Asset[]> = new Map<string, Asset[]>();
  currentAsset: Asset | null = null;
  rotation: number = 0

  constructor(private assetService: AssetService, public dialog: MatDialog) {
  }

  ngOnInit() {
    var imageDetails = this.assetService.getAssetList().snapshotChanges().subscribe(
      (list: any[]) => {
        var results = list.map(item => {
          return item.payload.val() as Asset
        });
        results.map(result => result.category).forEach(category => this.assetCategoryMap.set(category, []))
        results.forEach(result => {
            if (this.assetCategoryMap && result.category && this.assetCategoryMap.has(result.category)) {
              // @ts-ignore
              this.assetCategoryMap.get(result.category).push(result);
            }
          }
        );
        console.log(this.assetCategoryMap)
      }
    );
    console.log(this.assetCategoryMap)
  }

  setCurrentAsset(newAsset: Asset) {
    this.currentAsset = newAsset
  }

  rotate() {
    this.dialog.open(AssetRotatorComponent, {
        data: this.currentAsset
      }
    )
  }

  scale() {
  }

  crop() {
  }

}
