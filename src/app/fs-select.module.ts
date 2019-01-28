import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material';

import { FsSelectComponent } from './components/select/select.component';
import { MatSelectDirective } from './directives/mat-select.directive';

@NgModule({
  imports: [
    CommonModule,
    MatSelectModule
  ],
  exports: [
    MatSelectDirective,
  ],
  entryComponents: [
  ],
  declarations: [
    FsSelectComponent,
    MatSelectDirective,
  ],
  providers: [
  ],
})
export class FsSelectModule {
  // static forRoot(): ModuleWithProviders {
  //   return {
  //     ngModule: FsSelectModule
  //   };
  // }
}
