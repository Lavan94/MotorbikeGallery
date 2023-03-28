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
  }

  insertImageDetails(imageDetails: { caption: string; category: string; imageUrl: string; }) {
    if(this.imageDetailList) this.imageDetailList.push(imageDetails);
  }
}
