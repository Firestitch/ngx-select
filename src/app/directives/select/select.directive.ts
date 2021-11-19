import { Directive, OnInit } from '@angular/core';
import { MatSelect } from '@angular/material/select';


@Directive({
  selector: '[fsSelect]',
})
export class FsSelectDirective implements OnInit {

  constructor(
    private select: MatSelect,
  ) {
  }

  public ngOnInit () {
    this.select.panelClass = 'fs-select-panel';
  }
}
