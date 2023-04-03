import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TileFileComponent } from './tile-file.component';

describe('TileFileComponent', () => {
  let component: TileFileComponent;
  let fixture: ComponentFixture<TileFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TileFileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TileFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
