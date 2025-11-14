import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.scss']
})
export class CustomCardComponent implements OnInit {

  @Input() title = '';
  @Input() emtyTitleText = 'No Title';
  @Output() titleChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onChangeTitle(newTitle: string) {
    this.title = newTitle;
    this.titleChange.emit(this.title);
  }

}
