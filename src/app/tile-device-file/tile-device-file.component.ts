import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-tile-device-file',
  templateUrl: './tile-device-file.component.html',
  styleUrls: ['./tile-device-file.component.sass']
})
export class TileDeviceFileComponent {
  @Input() deviceFileName: string = '';
  @Input() progress: number = 0;

}
