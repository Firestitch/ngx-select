import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material';

import { FsSelectComponent } from './components';
import { FsAllowNullDirective } from './directives';

@NgModule({
  imports: [
    CommonModule,
    MatSelectModule
  ],
  exports: [
    FsAllowNullDirective
  ],
  entryComponents: [
  ],
  declarations: [
    FsSelectComponent,
    FsAllowNullDirective
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
