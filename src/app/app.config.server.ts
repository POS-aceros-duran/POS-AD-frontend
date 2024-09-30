import { provideHttpClient, withFetch, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom, mergeApplicationConfig } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideServerRendering } from '@angular/platform-server';
import { provideRouter } from '@angular/router';
import { AuthInterceptor } from '@app/interceptor';
import { appConfig } from './app.config';
import { routes } from './app.routes';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    importProvidersFrom(BrowserModule),
    provideAnimations(),
    provideHttpClient(withFetch(), withInterceptorsFromDi(), withInterceptors([AuthInterceptor])),
    provideRouter(routes), provideAnimationsAsync(), provideAnimationsAsync('noop'),
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
