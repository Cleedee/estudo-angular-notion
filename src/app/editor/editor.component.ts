import { Component, OnDestroy } from '@angular/core';
import { Editor } from '@tiptap/core';
import StarterKit from '@tiptap/starter-kit';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import { lowlight } from 'lowlight/lib/core';
import html from 'highlight.js/lib/languages/xml';
import css from 'highlight.js/lib/languages/css';

import { texto } from './conteudoInicial';

lowlight.registerLanguage('html', html);
lowlight.registerLanguage('css', css);

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnDestroy {

  editor = new Editor({
    extensions: [
      StarterKit,
      CodeBlockLowlight.configure({
        lowlight,
      }),
    ],
    editorProps: {
      attributes: {
        class: 'outline-none'
      }
    },
    content: texto,
  });

  value = texto;

  ngOnDestroy(): void {
      this.editor.destroy();
  }

}
