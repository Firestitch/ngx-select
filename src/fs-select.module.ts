import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material';

import { FsSelectComponent } from './components';
import { MatSelectDirective } from './directives';

@NgModule({
  imports: [
    CommonModule,
    MatSelectModule
  ],
  exports: [
    MatSelectDirective
  ],
  entryComponents: [
  ],
  declarations: [
    FsSelectComponent,
    MatSelectDirective
  ],
  providers: [
  ],
})
export class FsSelectModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FsSelectModule
    };
  }
}
