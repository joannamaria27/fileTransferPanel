import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-tile-device-file',
  templateUrl: './tile-device-file.component.html',
  styleUrls: ['./tile-device-file.component.sass']
})
export class TileDeviceFileComponent implements OnInit {
  @Input() deviceFileName: string = '';
  @Input() progress: number = 0;
  public progressBar: Observable<number> = of(0);

  ngOnInit(): void {
    this.progressBar = of(this.progress === 1 ? 100 : 0);
  }


}
