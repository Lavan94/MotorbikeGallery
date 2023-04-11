import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from "@angular/fire/compat/database";
import {Asset} from "./Asset";

@Injectable({
  providedIn: 'root'
})
export class AssetService {
  assetList: AngularFireList<Asset> | undefined;

  constructor(private firebase: AngularFireDatabase) {
  }

  getAssetList(): AngularFireList<Asset> {
    this.assetList = this.firebase.list('assetList');
    return this.assetList;
  }

  addAsset(asset: Asset) {
    if (this.assetList) this.assetList.push(asset);
  }

  updateAsset(asset: Asset) {
    if (!this.assetList) return;
    this.firebase.object('/assetList/' + asset.id).update(asset)
      .then(result => console.log(this.firebase.list('assetList')))
  }
}
