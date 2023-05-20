import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ms-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
})

export class RadioComponent {
  @Input() radioPlaceholder: string = 'Option';
  @Output() deleteEvent = new EventEmitter<any>();

  handleDelete(e: any) {
    this.deleteEvent.emit(e);
  }
}
