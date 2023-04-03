import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTileDeviceComponent } from './list-tile-device.component';

describe('ListTileDeviceComponent', () => {
  let component: ListTileDeviceComponent;
  let fixture: ComponentFixture<ListTileDeviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTileDeviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTileDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
