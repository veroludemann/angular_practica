import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';

HttpClientModule
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withComponentInputBinding()),

    importProvidersFrom(HttpClientModule)
  ]
};
