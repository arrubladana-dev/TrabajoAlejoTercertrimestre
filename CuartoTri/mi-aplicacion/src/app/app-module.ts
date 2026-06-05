import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { App } from './app';
import { Cuadro } from './cuadro/cuadro';
import { Boton } from './boton/boton';

@NgModule({
  declarations: [App, Cuadro, Boton],
  imports: [BrowserModule],
  providers: [provideBrowserGlobalErrorListeners(), provideClientHydration(withEventReplay())],
  bootstrap: [App],
})
export class AppModule {
  
}
