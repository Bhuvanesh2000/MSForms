import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { LoadComponent } from 'src/app/load/load.component';

@Component({
  selector: 'ms-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss'],
})
export class TemplateComponent implements OnInit {
  @Input() templateType: string = 'text';
  @Output() deleteEvent = new EventEmitter<any>();

  @ViewChild('loadComponents', { read: ViewContainerRef, static: true })
  loadComponents!: ViewContainerRef;

  count = 0;

  ngOnInit(): void {
    let comp;
    if (this.templateType == 'radio') {
      comp = this.loadComponents.createComponent(LoadComponent);
      comp.instance.compType = 'radio';
      comp = this.loadComponents.createComponent(LoadComponent);
      comp.instance.compType = 'button';
      comp.instance.label = 'Add Option';
      comp.instance.type = 'button';
      comp.instance.itemType = 'radio';
      comp.instance.passResult.subscribe((data: any) => {
        console.log(data.instance.itemType);
        switch (data.instance.itemType) {
          case 'radio':
            const innerComp =
              this.loadComponents.createComponent(LoadComponent);
            innerComp.instance.compType = 'radio';
            break;
          default:
            break;
        }
      });
    }
  }

  handleDelete(e: any) {
    this.deleteEvent.emit(e);
  }
}
