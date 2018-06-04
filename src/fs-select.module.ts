import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FsSelectComponent } from './components';
import { MatSelectModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatSelectModule,
  ],
  exports: [
    FsSelectComponent,
  ],
  entryComponents: [
  ],
  declarations: [
    FsSelectComponent,
  ],
  providers: [
  ],
})
export class FsSelectModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FsSelectModule,
    };
  }
}
