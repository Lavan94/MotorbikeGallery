import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AssetListComponent} from "./gallery/asset-list/asset-list.component";
import {AssetUploadFormComponent} from "./gallery/asset-upload/asset-upload-form.component";
import {AssetGalleryComponent} from "./gallery/asset-gallery/asset-gallery.component";

const routes: Routes = [
  { path: '', redirectTo: 'image/upload', pathMatch: 'full' },
  {
    path: 'image', component: AssetGalleryComponent, children: [
      { path: 'upload', component: AssetUploadFormComponent },
      { path: 'list', component: AssetListComponent }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
