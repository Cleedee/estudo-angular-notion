import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { NgxTiptapModule } from 'ngx-tiptap';

import { AppComponent } from './app.component';
import { EditorComponent } from './editor/editor.component';

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent
  ],
  imports: [
    BrowserModule, FormsModule, NgxTiptapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
