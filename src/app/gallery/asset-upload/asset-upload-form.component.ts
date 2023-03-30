import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {finalize} from "rxjs";
import {AssetService} from "../asset.service";
import {Asset, ASSET_CATEGORIES} from "../Asset";

@Component({
  selector: 'app-asset-upload',
  templateUrl: './asset-upload-form.component.html',
  styleUrls: ['./asset-upload.component.sass']
})
export class AssetUploadFormComponent implements OnInit {
  imgSrc: string = "";
  selectedAsset: any = null;
  isSubmitted: boolean = false;
  assetCategories = ASSET_CATEGORIES;

  formTemplate = new FormGroup({
    name: new FormControl('', Validators.required),
    category: new FormControl(''),
    assetUrl: new FormControl('', Validators.required)
  })

  constructor(private angularFireStorage: AngularFireStorage, private assetService: AssetService) {
  }

  ngOnInit() {
    this.resetForm();
  }

  showPreview(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.imgSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedAsset = event.target.files[0];
    } else {
      this.imgSrc = '/assets/img/image_placeholder.jpg';
      this.selectedAsset = null;
    }
  }

  onSubmit(assetValue: Asset) {
    this.isSubmitted = true;
    if (this.formTemplate.valid) {
      var filePath = `${assetValue.category}/${this.selectedAsset.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
      const fileRef = this.angularFireStorage.ref(filePath);
      this.angularFireStorage.upload(filePath, this.selectedAsset).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            assetValue['assetUrl'] = url;
            this.assetService.addAsset(assetValue);
            this.resetForm();
          })
        })
      ).subscribe();
    }
  }

  get formControls() {
    return this.formTemplate['controls'];
  }

  resetForm() {
    this.formTemplate.reset();
    this.formTemplate.setValue({
      name: '',
      assetUrl: '',
      category: 'Auto-Moto'
    });
    this.imgSrc = '/assets/img/image_placeholder.jpg';
    this.selectedAsset = null;
    this.isSubmitted = false;
  }
}
