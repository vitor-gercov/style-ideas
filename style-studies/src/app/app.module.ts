import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransitionsComponent } from './views/transitions/transitions.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Angular material imports:

import { MatFormFieldModule } from '@angular/material/form-field';

//For more material: https://material.angular.io

@NgModule({
  declarations: [
    AppComponent,
    TransitionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    //Don't forget to declare the material on the imports array:
    
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
