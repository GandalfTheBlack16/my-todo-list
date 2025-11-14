import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-editable-text',
  templateUrl: './editable-text.component.html',
  styleUrls: ['./editable-text.component.scss']
})
export class EditableTextComponent implements OnInit {

  @Input() text = '';
  @Input() emptyText = 'Undefined';
  @Output() textChange = new EventEmitter<string>();

  @ViewChild('editInput', { static: false }) editInput!: ElementRef<HTMLInputElement>;

  isEditting = false;

  constructor() { }

  ngOnInit(): void {
  }

  onValueChange($event: Event) {
    this.text = ($event.target as HTMLInputElement).value;
  }

  onEnterKey($event: Event) {
    this.text = ($event.target as HTMLInputElement).value;
    this.viewMode();
  }

  viewMode() {
    if (!this.text) {
      this.text = this.emptyText;
    }
    this.isEditting = false;
  }

  editMode() {
    this.isEditting = true;
    setTimeout(() => {
      const input = this.editInput.nativeElement as HTMLInputElement;
      input.select();
      input.focus();
    }, 0);
  }
}
