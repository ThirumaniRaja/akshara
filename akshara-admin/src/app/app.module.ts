import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MaterialModule } from './material-module/material/material.module';
import { TableViewComponent } from './components/table-view/table-view.component';
import { AppRoutingModule } from './app.routing.module';
import { TableViewPageComponent } from './components/table-view-page/table-view-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TableViewComponent,
    TableViewPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule

  ],
  providers: [],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
