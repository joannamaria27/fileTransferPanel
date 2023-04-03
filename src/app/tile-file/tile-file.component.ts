import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
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
  @Input() devices$: Observable<Device[]> = of([]);
  @Output() updatedListDevicesEvent = new EventEmitter<Observable<Device[]>>();

  constructor(private api: ApiService) { }

  tileSelected() {
    if (!this.isSelected) {
      this.isSelected = true;
    }

    this.devices$.subscribe(devices => {
      devices.map((device, indexDevice) => {
        const isDeviceContainsClickedFile = device.files.some(file => file.id === this.fileId)
        if (!isDeviceContainsClickedFile) {
          const newFile: DeviceFile = { id: this.fileId, progress: 0 };
          device.files.push(newFile);
          this.updateDevice(device.id, device, indexDevice);

        }

      })
    })


    //dodanie do kolejki

  }


  updateDevice(deviceId: number, device: Device, index: number) {
    this.api.updateDevice(deviceId, device).subscribe(updatedDevice => {
      this.devices$.subscribe((devices) => {
        devices[index] = device;
      })
      this.updatedListDevicesEvent.emit(this.devices$);
    })





  }







}
