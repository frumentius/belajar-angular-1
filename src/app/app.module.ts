import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './HelloWorld/hello-world.component';
import { HelloWorldBindingsComponent } from './HelloWorld/hello-world-bindings.component';
import { HelloWorldNgIfComponent } from './HelloWorld/hello-world-ngif.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    HelloWorldBindingsComponent,
    HelloWorldNgIfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
