import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TileDeviceFileComponent } from './tile-device-file.component';

describe('TileDeviceFileComponent', () => {
  let component: TileDeviceFileComponent;
  let fixture: ComponentFixture<TileDeviceFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TileDeviceFileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TileDeviceFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
