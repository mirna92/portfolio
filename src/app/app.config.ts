import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideToastr } from 'ngx-toastr';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(),
    provideAnimations(),
    provideAnimationsAsync(),
    provideToastr({
    positionClass: "toast-top",
    timeOut: 5000,
    progressBar: true,
  }), 
  provideHttpClient()]
};
