import {Component, Input, OnInit} from '@angular/core';
import {Asset} from "../../Asset";

@Component({
  selector: 'app-asset-slider',
  templateUrl: './asset-slider.component.html',
  styleUrls: ['./asset-slider.component.sass']
})
export class AssetSliderComponent implements OnInit {

  @Input() assets: Asset[] = [];

  currentIndex: number = 0;
  timeoutId?: number;

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
  }

  goToNext(): void {
    const isLastSlide = this.currentIndex === this.assets.length - 1;
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;

    this.currentIndex = newIndex;
  }

  goToSlide(slideIndex: number): void {
    this.currentIndex = slideIndex;
  }

  getCurrentSlideUrl() {
    return this.getAssetType() === 'image' ? `url('${this.assets[this.currentIndex].assetUrl}')` : this.assets[this.currentIndex].assetUrl;
  }

  getAssetName() {
    return this.assets[this.currentIndex].name
  }

  getAssetType(){
    return this.assets[this.currentIndex].assetType
  }

}
