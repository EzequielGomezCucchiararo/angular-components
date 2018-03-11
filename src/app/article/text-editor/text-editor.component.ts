import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.css']
})
export class TextEditorComponent implements OnInit {

  @Output() countUpdate = new EventEmitter<number>();

  constructor() { }

  emitWordCount(event: Event): void {
    this.countUpdate.emit(
      (event.target.value.match(/\S+/g) || []).length
    );
  }

  ngOnInit() {
  }

}
