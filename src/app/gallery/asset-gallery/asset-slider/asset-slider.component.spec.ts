import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetSliderComponent } from './asset-slider.component';

describe('AssetSliderComponent', () => {
  let component: AssetSliderComponent;
  let fixture: ComponentFixture<AssetSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
