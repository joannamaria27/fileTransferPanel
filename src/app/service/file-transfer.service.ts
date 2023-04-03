import { Injectable } from '@angular/core';
import { Device } from './device';
import { File } from './file';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileTransferService {

  // Placeholder for last id so we can simulate
  // automatic incrementing of ids
  lastId: number = 0;

  // Placeholder for files,devices
  files: File[] = [];
  devices: Device[] = [];

  constructor() {
  }
  // Simulate GET
  getAllFiles(): File[] {
    return this.files;
  }
  getAllDevices(): Device[] {
    return this.devices;
  }
  // Simulate GET //:id
  //  getFileById(id: number): Observable<File> {
  //   return this.files.filter(file => file.id === id);
}
//  getDeviceById(id: number): Observable<Device> {
//return this.devices.filter(device => device.id === id);
  }
// Simulate PAtch /device/:id
updateDeviceById(id: number, values: Object = {}): Device {
  let device = this.getDeviceById(id);
  if (!device) {
    return null;
  }
  Object.assign(device, values);
  return device;
}


}
