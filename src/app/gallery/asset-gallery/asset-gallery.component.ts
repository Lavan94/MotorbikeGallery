import {Component, OnInit} from '@angular/core';
import {AssetService} from "../asset.service";
import {Asset} from "../Asset";

@Component({
  selector: 'app-asset-gallery',
  templateUrl: './asset-gallery.component.html',
  styleUrls: ['./asset-gallery.component.sass']
})
export class AssetGalleryComponent implements OnInit {
  assetCategoryMap: Map<string, Asset[]> = new Map<string, Asset[]>();

  constructor(private assetService: AssetService) {
  }

  ngOnInit() {
    var imageDetails = this.assetService.getAssetList().snapshotChanges().subscribe(
      (list: any[]) => {
        var results = list.map(item => {
          return item.payload.val() as Asset
        });
        results.map(result => result.category).forEach(category => this.assetCategoryMap.set(category, []))
        results.forEach(result => {
            if(this.assetCategoryMap && result.category && this.assetCategoryMap.has(result.category)) {
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

}
