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
    if (this.progressBar === of(0)) {
      //sprawdzenie czy wolne urzadzenie i plik pobieranie lub dodanie do kolejki
    }
  }

  public async download(fileSize: number, downloadDevice: number): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      let remainingSize = fileSize;
      const intervalId = setInterval(() => {
        remainingSize -= downloadDevice;
        let value = Math.min(Math.round((fileSize - remainingSize) / fileSize * 100), 100);
        this.progressBar = of(value);
        if (remainingSize < 0)
          remainingSize = 0;
        if (remainingSize === 0) {
          clearInterval(intervalId);
          resolve();
        }
      }, 1000);
    });
  }

}
