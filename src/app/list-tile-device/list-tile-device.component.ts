import { Component, Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import { File } from '../models/file';
import { Device } from '../models/device';

@Component({
  selector: 'app-list-tile-device',
  templateUrl: './list-tile-device.component.html',
  styleUrls: ['./list-tile-device.component.sass']
})
export class ListTileDeviceComponent {
  @Input() devices$: Observable<Device[]> = of([]);
  @Input() files$: Observable<File[]> = of([]);
}
