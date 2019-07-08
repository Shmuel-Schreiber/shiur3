import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TwComponent } from './c/tw/tw.component';
import { ParentComponent } from './c1/parent/parent.component';
import { ChildComponent } from './c1/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    TwComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
