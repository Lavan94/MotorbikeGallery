import {Component, OnInit} from '@angular/core';
import {AssetService} from "../asset.service";

@Component({
  selector: 'app-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.sass']
})
export class AssetListComponent implements OnInit {
  imageList: any[] = [];
  rowIndexArray: any[] = [];

  constructor(private assetService: AssetService) {
  }

  ngOnInit() {
    if(this.assetService.assetList) {
      this.assetService.assetList.snapshotChanges().subscribe(
        (list: any[]) => {
          this.imageList = list.map(item => {
            return item.payload.val();
          });
          this.rowIndexArray = Array.from(Array(Math.ceil((this.imageList.length + 1) / 3)).keys());
        }
      );
    }
  }

}
