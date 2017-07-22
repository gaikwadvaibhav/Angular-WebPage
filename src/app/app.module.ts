import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WebComponent } from './web/web.component';
import { MasterComponent } from './master/master.component';
import { OneComponent } from './master/one.component';
import { TwoComponent } from './master/two.component';
import { DatabindingComponent } from './databinding/databinding.component';

@NgModule({
  declarations: [
    AppComponent,
    WebComponent,
    MasterComponent,
    OneComponent,
    TwoComponent,
    DatabindingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
