import {Component, EventEmitter, Input, OnInit, Output, Renderer2} from '@angular/core';
import {Asset} from "../../Asset";

@Component({
  selector: 'app-asset-slider',
  templateUrl: './asset-slider.component.html',
  styleUrls: ['./asset-slider.component.sass']
})
export class AssetSliderComponent implements OnInit {

  @Input() assets: Asset[] = [];
  @Output() currentAsset = new EventEmitter<Asset>()

  currentIndex: number = 0;
  timeoutId?: number;

  constructor(private renderer: Renderer2) {
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    window.clearTimeout(this.timeoutId);
  }

  goToPrevious(): void {
    const isFirstSlide = this.currentIndex === 0;
    const newIndex = isFirstSlide
      ? this.assets.length - 1
      : this.currentIndex - 1;

    this.currentIndex = newIndex;
    this.currentAsset.emit(this.assets[this.currentIndex])
  }

  goToNext(): void {
    const isLastSlide = this.currentIndex === this.assets.length - 1;
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;

    this.currentIndex = newIndex;
    this.currentAsset.emit(this.assets[this.currentIndex])
  }

  goToSlide(slideIndex: number): void {
    this.currentIndex = slideIndex;
    this.currentAsset.emit(this.assets[this.currentIndex])
  }

  getCurrentSlideUrl() {
    const asset = this.assets[this.currentIndex];
    const image = document.getElementById("asset-image");
    if (asset.blur) {
      this.renderer.setStyle(image, 'filter', `blur(${asset.blur}px)`)
    }
    if (asset.rotation || asset.scale) {
      this.renderer.setStyle(image, 'transform', `rotate(${asset.rotation}deg) scale(${asset.scale[0]},${asset.scale[1]})`)
    }
    return this.assets[this.currentIndex].assetUrl;
  }

  getAssetName() {
    return this.assets[this.currentIndex].name
  }

  getAssetType() {
    return this.assets[this.currentIndex].assetType
  }

}
