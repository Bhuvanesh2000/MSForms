import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './utils/button/button.component';
import { TextInputComponent } from './utils/text-input/text-input.component';
import { DateComponent } from './utils/date/date.component';
import { NavComponent } from './nav/nav.component';
import { RadioComponent } from './utils/radio/radio.component';
import { ContainerComponent } from './container/container.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    TextInputComponent,
    DateComponent,
    NavComponent,
    RadioComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
