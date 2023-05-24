import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ButtonComponent } from '../utils/button/button.component';
import { TemplateComponent } from '../utils/template/template.component';

@Component({
  selector: 'ms-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements OnInit {
  options: any = [
    { type: 'radio', label: 'Choice' },
    { type: 'text', label: 'Text' },
    { type: 'date', label: 'Date' },
    { type: 'file', label: 'Upload' },
  ];

  @ViewChild('fieldOptionsRef', { read: ViewContainerRef, static: true })
  fieldOptionsRef!: ViewContainerRef;
  @ViewChild('fieldTemplatesRef', { read: ViewContainerRef, static: true })
  fieldTemplatesRef!: ViewContainerRef;

  ngOnInit() {
    this.options.forEach((option: any) => {
      // use loadComponent
      const comp = this.fieldOptionsRef.createComponent(ButtonComponent);
      comp.instance.btnLabel = option['label'];
      comp.instance.itemType = option['type'];
      comp.instance.btnClick.subscribe((event: any) => {
        const templateType = comp.instance.itemType;
        this.createQuestionTemplateComponent(templateType);
      });
    });
  }

  createQuestionTemplateComponent(type: string) {
    // use loadComponent
    const comp = this.fieldTemplatesRef.createComponent(TemplateComponent);
    comp.instance.templateType = type;
    comp.instance.deleteEvent.subscribe(
      () => {
        comp.destroy();
      }
    );
  }
}
