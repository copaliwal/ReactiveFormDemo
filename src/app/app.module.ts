import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { FormBuilderDemoComponent } from './form-builder-demo/form-builder-demo.component';
import { DynamicFormDemoComponent } from './dynamic-form-demo/dynamic-form-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalDetailsComponent,
    FormBuilderDemoComponent,
    DynamicFormDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
