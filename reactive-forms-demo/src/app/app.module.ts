import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveBasicComponent } from './reactive-basic/reactive-basic.component';
import { ReactiveFormBuilderComponent } from './reactive-forn-builder/reactive-form-builder.component';
import { ReactiveFormBuilderValidationsComponent } from './reactive-forn-builder-validations/reactive-form-builder.component';
import { MyTextBoxComponent } from './my-text-box/my-text-box.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    ReactiveBasicComponent,
    ReactiveFormBuilderComponent,
    ReactiveFormBuilderValidationsComponent,
    MyTextBoxComponent
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
