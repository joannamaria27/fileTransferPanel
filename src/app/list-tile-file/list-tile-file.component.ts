import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, of } from 'rxjs';
import { File } from '../models/file';

@Component({
  selector: 'app-list-tile-file',
  templateUrl: './list-tile-file.component.html',
  styleUrls: ['./list-tile-file.component.sass']
})
export class ListTileFileComponent {
  @Input() files$: Observable<File[]> = of([]);
  @Output() updatedEvent = new EventEmitter<number>();

  updated(updated: number) {
    this.updatedEvent.emit(updated);
  }
}
