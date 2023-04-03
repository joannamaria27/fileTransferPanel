import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Observable, map, of } from 'rxjs';
import { Device } from '../models/device';
import { DeviceFile } from '../models/device-file';

@Component({
  selector: 'app-tile-file',
  templateUrl: './tile-file.component.html',
  styleUrls: ['./tile-file.component.sass']
})
export class TileFileComponent {
  public isSelected = false;
  @Input() fileName: string = '';
  @Input() fileId: number = 0;
  @Output() updatedEvent = new EventEmitter<number>();

  constructor(private api: ApiService) { }

  tileSelected() {
    if (!this.isSelected) {
      this.isSelected = true;
      this.updatedEvent.emit(this.fileId);
    }
  }

}
