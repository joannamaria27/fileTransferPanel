import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tile-file',
  templateUrl: './tile-file.component.html',
  styleUrls: ['./tile-file.component.sass']
})
export class TileFileComponent {
  public isSelected = false;
  @Input() fileName: string = '';
}
