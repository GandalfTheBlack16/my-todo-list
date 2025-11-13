import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.scss']
})
export class CustomCardComponent implements OnInit {

  @Input() title = '';
  @Input() editableTitle = false

  constructor() { }

  ngOnInit(): void {
  }

  changeTitle() {
    if (this.editableTitle) {
      
    }
  }

}
