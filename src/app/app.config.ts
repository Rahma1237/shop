import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import {
  AngularFireAuth,
  AngularFireAuthModule,
} from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { AuthInterceptor } from './component/auth-interceptor';

const firebaseConfig = {
  apiKey: 'AIzaSyBNASGKiEwVo0sigTmKVuP5MKkdyh9UPNY',
  authDomain: 'front-d894a.firebaseapp.com',
  projectId: 'front-d894a',
  storageBucket: 'front-d894a.appspot.com',
  messagingSenderId: '34315317342',
  appId: '1:34315317342:web:3e157d69d0b046087bc4cf',
  measurementId: 'G-K80MKQ1DNH',
};
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
};
