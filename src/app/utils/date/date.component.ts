import { Component, Input } from '@angular/core';

@Component({
  selector: 'ms-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
})

export class DateComponent {
  @Input() readonly: boolean = false;
}
