import { NgModule } from '@angular/core';
import { provideServerRendering, withRoutes } from '@angular/ssr';
import { App } from './app';
import { AppModule } from './app-module';
import { serverRoutes } from './app.routes.server';

@NgModule({
  imports: [AppModule],
  providers: [provideServerRendering(withRoutes(serverRoutes))],
  bootstrap: [App],
})
export class AppServerModule {
  variable = "blanco"

  colorRojo(){
    this.variable = "red"
  }

  colorAzul(){
    this.variable = "blue"
  }
  colorRosa(){
    this.variable = "pink"
  }
  colorMorado(){
    this.variable = "purple"
  }
}
