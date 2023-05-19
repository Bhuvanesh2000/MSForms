import { Component, Input } from '@angular/core';

@Component({
  selector: 'ms-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
})

export class TextInputComponent {
  @Input() txtPlaceholder: string = '';
  @Input() readonly: boolean = false;
}
