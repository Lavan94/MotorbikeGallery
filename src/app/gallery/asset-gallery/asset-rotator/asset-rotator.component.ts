import {Component, Inject, OnInit} from '@angular/core';
import {Asset} from "../../Asset";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-asset-rotator',
  templateUrl: './asset-rotator.component.html',
  styleUrls: ['./asset-rotator.component.sass']
})
export class AssetRotatorComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public asset: Asset) {
  }

  ngOnInit(): void {
  }
}
