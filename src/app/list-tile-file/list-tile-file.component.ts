import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService } from '../service/api.service';
import { File } from '../models/file';
import { Device } from '../models/device';

@Component({
  selector: 'app-list-tile-file',
  templateUrl: './list-tile-file.component.html',
  styleUrls: ['./list-tile-file.component.sass']
})
export class ListTileFileComponent {
  @Input() files$: Observable<File[]> = of([]);
  @Input() devices$: Observable<Device[]> = of([]);
  @Output() updatedListDevicesEvent = new EventEmitter<Observable<Device[]>>();

  updatedListDevices(updatedDevices: Observable<Device[]>) {
    this.updatedListDevicesEvent.emit(updatedDevices);
  }
}
