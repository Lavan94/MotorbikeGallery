import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetUploadFormComponent } from './asset-upload-form.component';

describe('AssetUploadComponent', () => {
  let component: AssetUploadFormComponent;
  let fixture: ComponentFixture<AssetUploadFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetUploadFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetUploadFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
