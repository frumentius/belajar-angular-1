import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './HelloWorld/hello-world.component';
import { HelloWorldBindingsComponent } from './HelloWorld/hello-world-bindings.component';
import { HelloWorldNgIfComponent } from './HelloWorld/hello-world-ngif.component';
import { HelloWorldDependencyInjectionComponent } from './HelloWorld/hello-world-dependency-injection.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    HelloWorldBindingsComponent,
    HelloWorldNgIfComponent,
    HelloWorldDependencyInjectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
