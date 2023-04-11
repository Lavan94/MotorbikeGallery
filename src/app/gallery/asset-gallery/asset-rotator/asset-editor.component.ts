import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {Asset} from "../../Asset";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Renderer2} from "@angular/core";
import {AssetService} from "../../asset.service";

@Component({
  selector: 'app-asset-editor',
  templateUrl: './asset-editor.component.html',
  styleUrls: ['./asset-editor.component.sass']
})
export class AssetEditorComponent implements OnInit, OnDestroy {
  constructor(@Inject(MAT_DIALOG_DATA) public asset: Asset, private renderer: Renderer2, private assetService: AssetService) {
    this.asset.rotation = this.asset.rotation ? this.asset.rotation : 0;
    this.asset.scale = this.asset.scale ? this.asset.scale : [1,1];
    this.asset.blur = this.asset.blur ? this.asset.blur : 0;
  }

  ngOnInit(): void {
    const image = document.getElementById("image");
    this.renderer.setStyle(image, 'filter', `blur(${this.asset.blur}px)`)
    this.renderer.setStyle(image, 'transform', `rotate(${this.asset.rotation}deg) scale(${this.asset.scale[0]},${this.asset.scale[1]})`)
  }

  rotate(degrees: number) {
    this.asset.rotation += degrees
    const image = document.getElementById("image");
    this.renderer.setStyle(image, 'transform', `rotate(${this.asset.rotation}deg) scale(${this.asset.scale[0]},${this.asset.scale[1]})`)
  }

  scale(scaleX: number = 1, scaleY: number = 1) {
    this.asset.scale = [scaleX, scaleY]
    const image = document.getElementById("image");
    this.renderer.setStyle(image, 'transform', `rotate(${this.asset.rotation}deg) scale(${this.asset.scale[0]},${this.asset.scale[1]})`)
  }

  blur(blurPixels: number = 0) {
    this.asset.blur = blurPixels;
    const image = document.getElementById("image");
    this.renderer.setStyle(image, 'filter', `blur(${this.asset.blur}px)`)
  }

  ngOnDestroy(): void {
    this.assetService.updateAsset(this.asset);
  }

}
