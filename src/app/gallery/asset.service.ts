import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from "@angular/fire/compat/database";

@Injectable({
  providedIn: 'root'
})
export class AssetService {
  imageDetailList: AngularFireList<any> | undefined;
  constructor(private firebase: AngularFireDatabase) { }

  getImageDetailList() {
    this.imageDetailList = this.firebase.list('imageDetails');
    return this.imageDetailList;
  }

  insertImageDetails(imageDetails: { name: string; category: string; assetUrl: string }) {
    if(this.imageDetailList) this.imageDetailList.push(imageDetails);
  }
}
