import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CrytoApiService } from './cryto-api.service';
import { MatListModule, MatDividerModule, MatToolbarModule, MatTableModule, MatDialogModule,  MatButtonModule} from '@angular/material';

import { AppComponent } from './app.component';
import { PriceModalComponent } from './price-modal/price-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    PriceModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatListModule,
    MatDividerModule,
    MatToolbarModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule
  ],
  entryComponents: [PriceModalComponent],
  providers: [CrytoApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
