import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tile-device-file',
  templateUrl: './tile-device-file.component.html',
  styleUrls: ['./tile-device-file.component.sass']
})
export class TileDeviceFileComponent {
  @Input() deviceFileName: string = '';
}
