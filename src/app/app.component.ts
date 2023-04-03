import { Component, OnInit } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { Device } from './models/device';
import { File } from './models/file';
import { ApiService } from './service/api.service';
import { DeviceFile } from './models/device-file';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'fileTransferPanelApp';

  files$: Observable<File[]> = of([]);
  devices$: Observable<Device[]> = of([]);
  updatedDevice: Observable<Device[]> = of([]);
  downloadQueue: { fileId: number, deviceId: number }[] = [];
  deviceBusy: Array<boolean> = [];
  fileBusy: Array<boolean> = [];
  updatedFileId: number = 0

  flaga = true;
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getAllFiles().subscribe(files => {
      this.files$ = of(files);
    });
    this.api.getAllDevices().subscribe(devices => {
      this.devices$ = of(devices);
    });
  }

  updated(updated: number) {
    this.updatedFileId = updated;
    this.devices$.subscribe(devices => {
      devices.map((device, indexDevice) => {
        const isContainsFile = device.files.some(file => file.id === this.updatedFileId)
        if (!isContainsFile) {
          const newFile: DeviceFile = { id: this.updatedFileId, progress: 0 };
          device.files.push(newFile);
          this.api.updateDevice(device.id, device).subscribe(updatedDevice => {
            this.devices$.subscribe((devices) => {
              devices[indexDevice] = device;
            })
            this.downloadQueue.push({ fileId: this.updatedFileId, deviceId: device.id });
            this.startDownload();
          })
        }
      })
    })
  }

  startDownload() {
    if (this.downloadQueue.length !== null) {
      for (let i = 0; i < this.downloadQueue.length; i++) {
        const deviceId = this.downloadQueue[i].deviceId;
        const fileId = this.downloadQueue[i].fileId;
        if (this.deviceBusy.find(el => el === this.deviceBusy[deviceId])) {
          continue;
        }
        if (this.fileBusy.find(el => el === this.fileBusy[fileId])) {
          continue;
        }
        let size = 0;
        this.files$.subscribe(files => {
          files.map(file => {
            if (file.id == fileId) {
              size = file.size;
            }
          })
        });
        let download = 0;
        this.devices$.subscribe(devices => {
          devices.map(device => {
            if (device.id == deviceId) {
              download = device.download;
            }
          })
        });
        this.deviceBusy[deviceId] = true;
        this.fileBusy[fileId] = true;
        this.download(size, download, deviceId, fileId);
        if (i === this.downloadQueue.length) {
          this.flaga = false;
        }
      }
    }
  }
  public download(fileSize: number, downloadDevice: number, deviceId: number, fileId: number) {
    let remainingSize = fileSize;
    const intervalId = setInterval(() => {
      remainingSize -= downloadDevice;
      let value = Math.min((fileSize - remainingSize) / fileSize, 1);
      console.log(value)
      this.devices$.subscribe((devices => {
        devices.map(device => {
          if (device.id === deviceId) {
            device.files.map(file => {
              if (file.id === fileId) { file.progress = value; }
            })
          }
        })
      }))
      if (remainingSize < 0)
        remainingSize = 0;
      if (remainingSize === 0) {
        clearInterval(intervalId);
        this.devices$.pipe(
          map(devices => devices.find(device => {
            if (device.id === deviceId) {
              this.api.updateDevice(deviceId, device);
            }
          })))
        for (let i = 0; i < this.downloadQueue.length; i++) {
          if (this.downloadQueue[i].deviceId === deviceId && this.downloadQueue[i].fileId === fileId) {
            this.downloadQueue.splice(i, 1);
            break;
          }
        }
        this.deviceBusy[deviceId] = false;
        this.fileBusy[fileId] = false;
        this.startDownload();
      }
    }, 1000);
  }
}