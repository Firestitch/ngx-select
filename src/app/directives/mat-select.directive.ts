import { Directive, Input, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';
import { NgModel } from '@angular/forms';


@Directive({
    selector: 'mat-select',
    providers: [NgModel]
})
export class MatSelectDirective implements OnInit, OnChanges {

  @Input() public ngModel: any = null;

  @Output() ngModelChange: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() { }


  ngOnChanges(changes) {
    if (changes && changes.ngModel && changes.ngModel.currentValue === undefined) {
      setTimeout(() => {
        //this.ngModel = null;
        //this.ngModelChange.emit(this.ngModel);
      });
    }
  }
}
