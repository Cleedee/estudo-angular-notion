import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { NgxTiptapModule } from 'ngx-tiptap';
import { HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { LucideAngularModule, Menu, Bold, Italic, Strikethrough } from 'lucide-angular';

import { AppComponent } from './app.component';
import { EditorComponent } from './editor/editor.component';
import { BubbleButtonComponent } from './bubble-button/bubble-button.component';

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    BubbleButtonComponent
  ],
  imports: [
    BrowserModule, FormsModule, NgxTiptapModule,
    LucideAngularModule.pick({Menu, Bold, Italic, Strikethrough})
  ],
  providers: [{
    provide: HIGHLIGHT_OPTIONS,
    useValue: {
      coreLibraryLoader: () => import('highlight.js/lib/core'),
    }
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
