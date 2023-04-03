import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../service/api.service';
import { File } from '../models/file';
import { Device } from '../models/device';

@Component({
  selector: 'app-list-tile-device',
  templateUrl: './list-tile-device.component.html',
  styleUrls: ['./list-tile-device.component.sass']
})
export class ListTileDeviceComponent {
  files$: Observable<File[]> = this.api.getAllFiles();
  devices$: Observable<Device[]> = this.api.getAllDevices();

  constructor(private api: ApiService) { }


}
