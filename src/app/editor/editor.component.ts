import { Component, OnDestroy } from '@angular/core';
import { Editor } from '@tiptap/core';
import StarterKit from '@tiptap/starter-kit';
import { texto } from './conteudoInicial';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnDestroy {

  editor = new Editor({
    extensions: [StarterKit],
    editorProps: {
      attributes: {
        class: 'outline-none'
      }
    },
  });

  value = texto;

  ngOnDestroy(): void {
      this.editor.destroy();
  }

}
