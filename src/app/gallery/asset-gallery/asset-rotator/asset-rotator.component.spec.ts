import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetRotatorComponent } from './asset-rotator.component';

describe('AssetRotatorComponent', () => {
  let component: AssetRotatorComponent;
  let fixture: ComponentFixture<AssetRotatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetRotatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetRotatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
