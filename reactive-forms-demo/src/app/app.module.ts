import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveBasicComponent } from './reactive-basic/reactive-basic.component';
import { ReactiveFormArrayComponent } from './reactive-form-array/reactive-form-array.component';
import { ReactiveFormBuilderComponent } from './reactive-forn-builder/reactive-form-builder.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    ReactiveBasicComponent,
    ReactiveFormArrayComponent,
    ReactiveFormBuilderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
