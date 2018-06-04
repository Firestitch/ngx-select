import './styles.scss';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app/app.component';
import { FsSelectModule } from '../src';
import { AppMaterialModule } from './app/material.module';
import { FsExampleModule } from '@firestitch/example';
import {
    StaticSingleSelectExampleComponent,
    SingleSelectExampleComponent,
    MultipleSelectExampleComponent,
    EmptySelectWithPlaceholderExampleComponent,
    EmptySelectPlaceholderActionExampleComponent,
    ReadOnlySelectExampleComponent
} from './app/components';


@NgModule({
  bootstrap: [ AppComponent ],
  imports: [
    BrowserModule,
    FsSelectModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    FsExampleModule
  ],
  entryComponents: [

  ],
  declarations: [
    AppComponent,

    StaticSingleSelectExampleComponent,
    SingleSelectExampleComponent,
    MultipleSelectExampleComponent,
    EmptySelectWithPlaceholderExampleComponent,
    EmptySelectPlaceholderActionExampleComponent,
    ReadOnlySelectExampleComponent
  ],
  providers: [
  ],
})
export class PlaygroundModule {
}
