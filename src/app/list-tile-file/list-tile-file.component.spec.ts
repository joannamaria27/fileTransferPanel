import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTileFileComponent } from './list-tile-file.component';

describe('ListTileFileComponent', () => {
  let component: ListTileFileComponent;
  let fixture: ComponentFixture<ListTileFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTileFileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTileFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
