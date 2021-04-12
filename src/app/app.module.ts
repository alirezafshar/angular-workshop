import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import localefr from '@angular/common/locales/fa';
registerLocaleData(localefr);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [{ provide: LOCALE_ID, useValue: 'fa' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
