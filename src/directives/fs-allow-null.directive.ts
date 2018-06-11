import { Directive, Input, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';
import { NgModel } from '@angular/forms';


@Directive({
    selector: '[fs-allow-null]',
    providers: [NgModel]
})
export class FsAllowNullDirective implements OnInit, OnChanges {

  @Input() public ngModel: any = null;

  @Output() ngModelChange: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  ngOnChanges(changes) {
    if (changes && changes.ngModel && changes.ngModel.currentValue == null) {
      setTimeout(() => {
        this.ngModel = '';
        this.ngModelChange.emit(this.ngModel);
      });
    }
  }
}
