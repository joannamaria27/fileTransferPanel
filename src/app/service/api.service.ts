import { Injectable } from '@angular/core';
import { File } from '../models/file';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Device } from '../models/device';
import { DeviceFile } from '../models/device-file';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  public getAllFiles(): Observable<File[]> {
    return this.http.get<File[]>(this.apiUrl + 'files');
  }
  getDevices(): Observable<Device[]> {
    return this.http.get<Device[]>(this.apiUrl + 'devices');
  }
  getDeviceFiles(deviceId: number): Observable<DeviceFile[]> {
    return this.http.get<DeviceFile[]>(`${this.apiUrl}devices/${deviceId}/files`);
  }
  updateDevice(deviceId: number, updatedDevice: Device) {
    return this.http.patch<Device>(this.apiUrl + 'devices/' + deviceId, updatedDevice);
  }
}
