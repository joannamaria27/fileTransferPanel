import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService } from '../service/api.service';
import { File } from '../models/file';

@Component({
  selector: 'app-list-tile-file',
  templateUrl: './list-tile-file.component.html',
  styleUrls: ['./list-tile-file.component.sass']
})
export class ListTileFileComponent {
  files$: Observable<File[]> = this.api.getAllFiles();
  constructor(private api: ApiService) { }
}
