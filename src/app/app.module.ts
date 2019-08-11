import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NumComponent } from './num/num.component';
import { DateComponent } from './date/date.component';

@NgModule({
  declarations: [
    AppComponent,
    NumComponent,
    DateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
