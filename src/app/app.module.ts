import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent, NavigationBarComponent, SigninComponent, SignupComponent } from './project.dependencies';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
