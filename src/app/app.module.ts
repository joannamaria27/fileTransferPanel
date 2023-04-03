import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TileFileComponent } from './tile-file/tile-file.component';
import { ApiService } from './service/api.service';
import { ListTileFileComponent } from './list-tile-file/list-tile-file.component';
import { HttpClientModule } from '@angular/common/http';
import { ListTileDeviceComponent } from './list-tile-device/list-tile-device.component';
import { TileDeviceComponent } from './tile-device/tile-device.component';
import { TileDeviceFileComponent } from './tile-device-file/tile-device-file.component';

@NgModule({
  declarations: [
    AppComponent,
    TileFileComponent,
    ListTileFileComponent,
    ListTileDeviceComponent,
    TileDeviceComponent,
    TileDeviceFileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
