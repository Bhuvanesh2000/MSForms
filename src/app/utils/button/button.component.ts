import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'ms-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})

export class ButtonComponent {
  @Input() btnLabel: string = 'Button';
  @Input() btnType: string = 'button';
  @Input() itemType: string = 'button';
  @Output() btnClick = new EventEmitter<any>();

  emitEvent(e: any) {
    this.btnClick.emit({ event: e, instance: this });
  }
}
