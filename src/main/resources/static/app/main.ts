// Imports for loading & configuring the in-memory web api
//import { XHRBackend } from '@angular/http';

//import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
//import { InMemoryDataService }               from './in-memory-data.service';

// The usual bootstrapping imports
//import { bootstrap }      from '@angular/platform-browser-dynamic';
//import { HTTP_PROVIDERS } from '@angular/http';
//import { provideForms, disableDeprecatedForms } from '@angular/forms';

//import { AppComponent }         from './app.component';
//import { APP_ROUTER_PROVIDERS } from './app.routes';

//import {enableProdMode} from '@angular/core';
//enableProdMode();

/*
bootstrap(AppComponent, [
  APP_ROUTER_PROVIDERS,
  HTTP_PROVIDERS
]);
*/
//bootstrap(AppComponent, [
//  APP_ROUTER_PROVIDERS,
//HTTP_PROVIDERS,
//[provideForms(),
//   disableDeprecatedForms()]
//{ provide: XHRBackend, useClass: InMemoryBackendService }, 
// in-mem server
//{ provide: SEED_DATA, useClass: InMemoryDataService }      
// in-mem server data
//]);

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);