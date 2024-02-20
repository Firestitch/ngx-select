import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FsExampleModule } from '@firestitch/example';
import { FsMessageModule } from '@firestitch/message';

import { AppComponent } from './app.component';
import { AppMaterialModule } from './material.module';
import {
  StaticSingleSelectExampleComponent,
  SingleSelectExampleComponent,
  MultipleSelectExampleComponent,
  EmptySelectWithPlaceholderExampleComponent,
  EmptySelectPlaceholderActionExampleComponent,
  ReadOnlySelectExampleComponent,
  CustomSelectedItemSelectExampleComponent
} from './components';
import { FsSelectModule } from '../../src/public_api';


@NgModule({
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppMaterialModule,
        FormsModule,
        FsSelectModule,
        FsMessageModule.forRoot(),
        FsExampleModule.forRoot(),
    ],
    declarations: [
        AppComponent,
        StaticSingleSelectExampleComponent,
        SingleSelectExampleComponent,
        MultipleSelectExampleComponent,
        EmptySelectWithPlaceholderExampleComponent,
        EmptySelectPlaceholderActionExampleComponent,
        ReadOnlySelectExampleComponent,
        CustomSelectedItemSelectExampleComponent
    ],
    providers: []
})
export class PlaygroundModule {
}
