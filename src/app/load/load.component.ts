import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { RadioComponent } from '../utils/radio/radio.component';
import { TextInputComponent } from '../utils/text-input/text-input.component';
import { DateComponent } from '../utils/date/date.component';
import { ButtonComponent } from '../utils/button/button.component';
import { FileUploadComponent } from '../utils/file-upload/file-upload.component';

@Component({
  selector: 'ms-load-component',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.scss'],
})

// take input attributes as params instead of adding on instance ex: instance.compType, instance.label
export class LoadComponent implements OnInit {
  @Input() compType!: string;
  @Input() readonly: boolean = false;
  @Input() placeholder: string = '';
  @Input() label: string = '';
  @Input() type: string = '';
  @Input() itemType: string = '';
  @Output() passResult = new EventEmitter<any>();

  @ViewChild('tempRef', { read: ViewContainerRef, static: true })
  template!: ViewContainerRef;

  ngOnInit(): void {
    console.log(this.template);
    this.createComp(this.compType);
  }

  createComp(compType: string) {
    let comp: any;
    switch (compType) {
      case 'radio':
        comp = this.template.createComponent(RadioComponent);
        comp.instance.deleteEvent.subscribe(
          () => {
            comp.destroy();
          }
        );
        break;
      case 'text':
        comp = this.template.createComponent(TextInputComponent);
        comp.instance.txtPlaceholder = this.placeholder;
        comp.instance.readonly = this.readonly;
        break;
      case 'date':
        comp = this.template.createComponent(DateComponent);
        comp.instance.readonly = this.readonly;
        break;
      case 'button':
        comp = this.template.createComponent(ButtonComponent);
        comp.instance.btnLabel = this.label;
        comp.instance.btnType = this.type;
        comp.instance.itemType = this.itemType;
        comp.instance.btnClick.subscribe((data: any) => {
          this.passResult.emit(data);
        });
        break;
      case 'file':
        comp = this.template.createComponent(FileUploadComponent);
        comp.instance.readonly = this.readonly;
        break;
      default:
        break;
    }
  }
}
