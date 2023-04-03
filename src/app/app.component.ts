import { Component, EventEmitter, Output, OnChanges, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Device } from './models/device';
import { File } from './models/file';
import { ApiService } from './service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit, OnChanges {
  title = 'fileTransferPanelApp';

  files$: Observable<File[]> = of([]);
  devices$: Observable<Device[]> = of([]);
  updatedDevice: Observable<Device[]> = of([]);

  constructor(private api: ApiService) { }

  ngOnChanges(): void {
    this.devices$ = this.updatedDevice;
  }

  ngOnInit(): void {
    this.api.getAllFiles().subscribe(files => {
      this.files$ = of(files);
    });

    this.api.getAllDevices().subscribe(devices => {
      this.devices$ = of(devices);
    });
  }

  updatedListDevices(updatedDevices: Observable<Device[]>) {
    this.updatedDevice = updatedDevices;
  }
}
