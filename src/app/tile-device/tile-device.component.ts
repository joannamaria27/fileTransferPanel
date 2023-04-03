import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tile-device',
  templateUrl: './tile-device.component.html',
  styleUrls: ['./tile-device.component.sass']
})
export class TileDeviceComponent {
  @Input() deviceName: string = '';
}